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
import { appSetting } from "../../../../appSetting";

interface EmergencyItem {
  id: number;
  nama: string;
  deskripsi: string;
  image: string;
  status: number;
}

export default function EmergencyTable() {
  const [data, setData] = useState<EmergencyItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    image: "",
    status: true,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setFormData({
      nama: "",
      deskripsi: "",
      image: "",
      status: true,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${appSetting.apiUrl}/api/emergency`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []))
      .catch(console.error);
  };

  const handleSubmit = () => {
    editingId ? updateData() : addData();
  };

  const addData = async () => {
    try {
      showLoading("Menyimpan emergency...");
      const res = await fetch(`${appSetting.apiUrl}/api/emergency`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Data berhasil ditambahkan.");
        closeModal();
        fetchData();
      } else showError("Gagal", "Tidak dapat menyimpan data.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const updateData = async () => {
    try {
      showLoading("Memperbarui emergency...");
      const res = await fetch(
        `${appSetting.apiUrl}/api/emergency/${editingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Data berhasil diperbarui.");
        closeModal();
        fetchData();
      } else showError("Gagal", "Tidak dapat memperbarui.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const deleteData = async (id: number) => {
    const confirmDelete = await showConfirmDelete(
      "Yakin menghapus?",
      "Data tidak dapat dikembalikan!",
      "Hapus",
      "Batal"
    );
    if (!confirmDelete) return;

    try {
      showLoading("Menghapus...");
      const res = await fetch(`${appSetting.apiUrl}/api/emergency/${id}`, {
        method: "DELETE",
      });
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Data dihapus.");
        fetchData();
      } else showError("Gagal", "Gagal menghapus.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const editData = (item: EmergencyItem) => {
    setEditingId(item.id);
    setFormData({
      nama: item.nama,
      deskripsi: item.deskripsi,
      image: item.image,
      status: item.status === 1,
    });
    setIsOpen(true);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* TABLE WRAPPER */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:bg-white/[0.03] dark:border-white/[0.05]">
        <div className="max-w-full overflow-x-auto">
          <div className="p-4 text-end">
            <Button
              onClick={openModal}
              className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:scale-105 duration-200 text-white"
            >
              + Add Emergency
            </Button>
          </div>

          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.08]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 min-w-[160px]"
                >
                  Name
                </TableCell>

                <TableCell
                  isHeader
                  className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 min-w-[300px]"
                >
                  Description
                </TableCell>

                <TableCell
                  isHeader
                  className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 min-w-[120px]"
                >
                  Image
                </TableCell>

                <TableCell
                  isHeader
                  className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 min-w-[100px]"
                >
                  Status
                </TableCell>

                <TableCell
                  isHeader
                  className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 min-w-[180px]"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {paginatedData.map((item) => (
                <TableRow key={item.id}>
                  {/* NAME */}
                  <TableCell className="px-6 py-4 text-gray-600 dark:text-gray-300 font-medium">
                    {item.nama}
                  </TableCell>

                  {/* DESCRIPTION */}
                  <TableCell className="px-4 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                    <div
                      className="prose prose-sm max-w-2xl dark:prose-invert line-clamp-1"
                      dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                    />
                  </TableCell>

                  {/* IMAGE */}
                  <TableCell className="px-6 py-4 text-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        className="w-16 h-16 mx-auto rounded-lg object-cover shadow"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        No Image
                      </span>
                    )}
                  </TableCell>

                  {/* STATUS */}
                  <TableCell className="px-6 py-4 text-center">
                    <Badge
                      size="sm"
                      color={item.status === 1 ? "success" : "error"}
                    >
                      {item.status === 1 ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>

                  {/* ACTION */}
                  <TableCell className="px-4 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      {/* EDIT BUTTON */}
                      <button
                        onClick={() => editData(item)}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                            fill=""
                          />
                        </svg>
                        Edit
                      </button>

                      {/* DELETE BUTTON */}
                      <button
                        onClick={() => deleteData(item.id)}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gradient-to-r from-red-500 to-red-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.5 2h5a.5.5 0 01.5.5V4h4a.5.5 0 010 1h-1.086l-.379 9.035a2 2 0 01-1.995 1.965H5.96a2 2 0 01-1.995-1.965L3.586 5H2.5a.5.5 0 010-1h4V2.5a.5.5 0 01.5-.5zm1 .5v1h3v-1h-3zm-3 2l.379 9.035a1 1 0 00.998.965h7.08a1 1 0 00.998-.965L13.5 4.5h-9z"
                            fill="currentColor"
                          />
                        </svg>
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
              className="px-3 py-1 text-sm border rounded disabled:opacity-50 text-gray-500 dark:text-gray-400"
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
              className="px-3 py-1 text-sm border rounded disabled:opacity-50 text-gray-500 dark:text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* MODAL ADD/EDIT */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[1000px] m-4"
      >
        <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl">
          <h4 className="text-2xl font-semibold mb-4 text-gray-500 dark:text-gray-400">
            {editingId ? "Edit Emergency" : "Add Emergency"}
          </h4>

          {/* Nama */}
          <div className="mb-3">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Name"
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
            />
          </div>

          {/* Deskripsi */}
          <div className="mb-3">
            <Label>Description</Label>
            <QuillEditor
              value={formData.deskripsi}
              onChange={(v) => setFormData({ ...formData, deskripsi: v })}
              placeholder="Write description here..."
              className="text-gray-800 text-theme-sm dark:text-gray-400"
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
                className="w-32 h-32 object-cover border rounded mt-2"
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
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {editingId ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
