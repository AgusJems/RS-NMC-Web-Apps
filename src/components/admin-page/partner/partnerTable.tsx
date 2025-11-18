import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import FileInput from "../../form/input/FileInput";

import {
  showSuccess,
  showError,
  showConfirmDelete,
  showLoading,
  closeSwal,
} from "../../../utils/swalFire";

interface Patner {
  id: number;
  name: string;
  image: string;
}

export default function PartnerTable() {
  const [data, setData] = useState<Patner[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchPartner();
  }, []);

  const fetchPartner = () => {
    fetch("http://localhost:3001/api/patner")
      .then((res) => res.json())
      .then((res) => setData(res.data || []))
      .catch(() => console.log("Failed fetch partner"));
  };

  const openModalAdd = () => {
    setEditingId(null);
    setFormData({ name: "", image: "" });
    setIsOpen(true);
  };

  const openModalEdit = (item: Patner) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      image: item.image,
    });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const savePartner = async () => {
    try {
      showLoading("Saving...");

      const url = editingId
        ? `http://localhost:3001/api/patner/${editingId}`
        : `http://localhost:3001/api/patner`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      closeSwal();

      if (!res.ok) return showError("Gagal", "Tidak dapat menyimpan data.");

      showSuccess(
        "Berhasil",
        editingId ? "Partner diperbarui." : "Partner ditambahkan."
      );

      closeModal();
      fetchPartner();
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan server.");
    }
  };

  const deletePartner = async (id: number) => {
    const confirmDel = await showConfirmDelete(
      "Yakin hapus?",
      "Data tidak dapat dikembalikan!",
      "Hapus",
      "Batal"
    );

    if (!confirmDel) return;

    try {
      showLoading("Menghapus...");
      const res = await fetch(`http://localhost:3001/api/patner/${id}`, {
        method: "DELETE",
      });

      closeSwal();

      if (!res.ok) return showError("Gagal", "Tidak dapat menghapus partner.");

      showSuccess("Berhasil", "Partner dihapus.");
      fetchPartner();
    } catch {
      closeSwal();
      showError("Error", "Kesalahan saat menghapus.");
    }
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginated = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* WRAPPER */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="p-4 text-end">
            <Button
              onClick={openModalAdd}
              className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:scale-105 duration-200 text-white"
            >
              + Add Partner
            </Button>
          </div>

          {/* TABLE */}
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Logo
                </TableCell>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Name
                </TableCell>
                <TableCell isHeader className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginated.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-4 py-4 text-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        className="w-20 h-20 object-contain mx-auto rounded"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        No Image
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="px-4 py-4 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                    {item.name}
                  </TableCell>

                  <TableCell className="px-4 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => openModalEdit(item)}
                        className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-theme-xs hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deletePartner(item.id)}
                        className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-theme-xs hover:bg-gradient-to-r from-red-500 to-red-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
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

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[600px] m-4">
        <div className="w-full p-6 lg:p-8 bg-white rounded-3xl dark:bg-gray-900">
          <h4 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            {editingId ? "Edit Partner" : "Add Partner"}
          </h4>

          {/* Name */}
          <div className="mb-3">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Partner name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Upload Image */}
          <div className="mb-3">
            <Label>Logo</Label>
            <FileInput
              onChange={(base64) => setFormData({ ...formData, image: base64 })}
            />

            {formData.image && (
              <img
                src={formData.image}
                className="w-32 h-32 object-contain border rounded mt-2"
              />
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={savePartner}>
              {editingId ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
