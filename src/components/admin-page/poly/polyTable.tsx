import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import FileInput from "../../form/input/FileInput";
import QuillEditor from "../../form/input/QuillEditor";
import Switch from "../../form/switch/Switch";

import {
  showSuccess,
  showError,
  showConfirmDelete,
  showLoading,
  closeSwal,
} from "../../../utils/swalFire";

interface PoliItem {
  id: number;
  nama_poli: string;
  deskripsi: string;
  image: string;
  status: number;
}

export default function PoliTable() {
  const [poliData, setPoliData] = useState<PoliItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nama_poli: "",
    deskripsi: "",
    image: "",
    status: true,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setFormData({
      nama_poli: "",
      deskripsi: "",
      image: "",
      status: true,
    });
  };

  useEffect(() => {
    fetchPoli();
  }, []);

  const fetchPoli = () => {
    fetch("http://localhost:3001/api/getAllPoli")
      .then((res) => res.json())
      .then((data) => setPoliData(data.data))
      .catch(console.error);
  };

  const handleSubmit = () => {
    editingId ? updatePoli() : addPoli();
  };

  const addPoli = async () => {
    try {
      showLoading("Menyimpan data poli...");
      const res = await fetch("http://localhost:3001/api/insertPoli", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Poli berhasil ditambahkan.");
        closeModal();
        fetchPoli();
      } else showError("Gagal", "Tidak dapat menyimpan data poli.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const updatePoli = async () => {
    try {
      showLoading("Memperbarui poli...");
      const res = await fetch(
        `http://localhost:3001/api/updatePoli/${editingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Poli berhasil diperbarui.");
        closeModal();
        fetchPoli();
      } else showError("Gagal", "Tidak dapat memperbarui poli.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const deletePoli = async (id: number) => {
    const confirmDelete = await showConfirmDelete(
      "Yakin ingin menghapus?",
      "Data poli tidak dapat dikembalikan!",
      "Hapus",
      "Batal"
    );
    if (!confirmDelete) return;

    try {
      showLoading("Menghapus...");
      const res = await fetch(`http://localhost:3001/api/deletePoli/${id}`, {
        method: "DELETE",
      });
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Poli berhasil dihapus.");
        fetchPoli();
      } else showError("Gagal", "Gagal menghapus poli.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan saat menghapus poli.");
    }
  };

  const editPoli = (item: PoliItem) => {
    setEditingId(item.id);
    setFormData({
      nama_poli: item.nama_poli,
      deskripsi: item.deskripsi,
      image: item.image,
      status: item.status === 1,
    });
    setIsOpen(true);
  };

  const totalPages = Math.ceil(poliData.length / itemsPerPage);
  const paginatedPoli = poliData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="p-4 text-end">
            <Button
              onClick={openModal}
              className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:scale-105 duration-200 text-white"
            >
              + Add Poli
            </Button>
          </div>

          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Nama Poli
                </TableCell>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Deskripsi
                </TableCell>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Image
                </TableCell>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Status
                </TableCell>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {paginatedPoli.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-4 py-4 text-center text-gray-500 dark:text-gray-400">
                    {item.nama_poli}
                  </TableCell>

                  <TableCell className="px-4 py-4 text-gray-500 dark:text-gray-400">
                    <div
                      className="prose prose-sm max-w-none dark:prose-invert line-clamp-1"
                      dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                    />
                  </TableCell>

                  <TableCell className="px-4 py-4 text-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        className="w-12 h-12 rounded object-cover mx-auto"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        No Image
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="px-4 py-4 text-center">
                    <Badge
                      size="sm"
                      color={item.status === 1 ? "success" : "error"}
                    >
                      {item.status === 1 ? "Active" : "Non Active"}
                    </Badge>
                  </TableCell>

                  <TableCell className="px-4 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      {/* EDIT */}
                      <button
                        onClick={() => editPoli(item)}
                        className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-blue-500 hover:text-white text-gray-800 dark:text-gray-400"
                      >
                        Edit
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => deletePoli(item.id)}
                        className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-red-500 hover:text-white text-gray-800 dark:text-gray-400"
                      >
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center px-5 py-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50 text-gray-800 dark:text-gray-400"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm border rounded ${
                  currentPage === page
                    ? "bg-emerald-500 text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50 text-gray-800 dark:text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* MODAL ADD/EDIT */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[900px]">
        <div className="p-6 lg:p-10 bg-white dark:bg-gray-900 rounded-3xl">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
            {editingId ? "Edit Poli" : "Add Poli"}
          </h4>

          {/* Nama Poli */}
          <div className="mb-3">
            <Label>Nama Poli</Label>
            <Input
              type="text"
              placeholder="Nama poli..."
              value={formData.nama_poli}
              onChange={(e) =>
                setFormData({ ...formData, nama_poli: e.target.value })
              }
            />
          </div>

          {/* Deskripsi */}
          <div className="mb-3">
            <Label>Deskripsi</Label>
            <QuillEditor
              value={formData.deskripsi}
              onChange={(v) => setFormData({ ...formData, deskripsi: v })}
              placeholder="Tulis deskripsi poli..."
            />
          </div>

          {/* Image */}
          <div className="mb-3">
            <Label>Upload Image</Label>
            <FileInput
              onChange={(base64) => setFormData({ ...formData, image: base64 })}
            />

            {formData.image && (
              <img
                src={formData.image}
                className="w-32 h-32 object-cover rounded border mt-2"
              />
            )}
          </div>

          {/* Status */}
          {editingId && (
            <div className="mb-3">
              <Label>Status</Label>
              <div className="flex items-center gap-3">
                <Switch
                  label=""
                  defaultChecked={formData.status}
                  onChange={(v) => setFormData({ ...formData, status: v })}
                />
                <span>{formData.status ? "Active" : "Inactive"}</span>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleSubmit}>
              {editingId ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
