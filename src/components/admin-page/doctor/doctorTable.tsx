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
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import FileInput from "../../form/input/FileInput";
import Select from "react-select";
import QuillEditor from "../../form/input/QuillEditor";

import {
  showSuccess,
  showError,
  showConfirmDelete,
  showLoading,
  closeSwal,
} from "../../../utils/swalFire";
import DoctorEducationModal from "./doctorEducationModal";
import DoctorScheduleModal from "./doctorScheduleModal";

const customStyles = {
  control: (base: any, state: any) => {
    const isDark = document.documentElement.classList.contains("dark");

    return {
      ...base,
      backgroundColor: isDark
        ? state.isFocused
          ? "#1f2937"
          : "#111827"
        : state.isFocused
        ? "#f0fdf4"
        : "white",

      borderColor: state.isFocused ? "#22c55e" : isDark ? "#374151" : "#e5e7eb",

      boxShadow: state.isFocused
        ? "0 0 0 2px rgba(34, 197, 94, 0.3)"
        : undefined,

      "&:hover": { borderColor: "#22c55e" },
      color: isDark ? "#f9fafb" : "#111827",
      padding: "2px",
      fontSize: "14px",
    };
  },

  menu: (base: any) => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      ...base,
      backgroundColor: isDark ? "#1f2937" : "white",
      color: isDark ? "#f9fafb" : "#111827",
      zIndex: 9999,
      fontSize: "14px",
    };
  },

  singleValue: (base: any) => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      ...base,
      color: isDark ? "#f9fafb" : "#111827",
    };
  },

  input: (base: any) => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      ...base,
      color: isDark ? "#f9fafb" : "#111827",
    };
  },

  placeholder: (base: any) => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      ...base,
      color: isDark ? "#9ca3af" : "#6b7280",
    };
  },

  option: (base: any, state: any) => {
    const isDark = document.documentElement.classList.contains("dark");

    return {
      ...base,
      backgroundColor: state.isSelected
        ? "#22c55e"
        : state.isFocused
        ? isDark
          ? "#374151"
          : "#f0fdf4"
        : "transparent",
      color: state.isSelected ? "white" : isDark ? "#f9fafb" : "#111827",
      "&:active": {
        backgroundColor: "#22c55e",
        color: "white",
      },
    };
  },
};

interface DokterItem {
  id: number;
  nama: string;
  spesialis: string;
  profile: string;
  image: string;
  poli_id: number;
}

interface PoliItem {
  id: number;
  nama_poli: string;
}

export default function DoctorTable() {
  const [doctorData, setDoctorData] = useState<DokterItem[]>([]);
  const [poliData, setPoliData] = useState<PoliItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nama: "",
    spesialis: "",
    profile: "",
    image: "",
    poli_id: "",
  });

  const [educationOpen, setEducationOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);

  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(
    null
  );

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchDoctors();
    fetchPoli();
  }, []);

  const parseHTMLToPlainText = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const fetchDoctors = () => {
    fetch("http://localhost:3001/api/getAllDokter")
      .then((res) => res.json())
      .then((data) => setDoctorData(data.data))
      .catch(console.error);
  };

  const fetchPoli = () => {
    fetch("http://localhost:3001/api/getAllPoli")
      .then((res) => res.json())
      .then((data) => setPoliData(data.data))
      .catch(console.error);
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setFormData({
      nama: "",
      spesialis: "",
      profile: "",
      image: "",
      poli_id: "",
    });
  };

  const handleSubmit = () => {
    editingId ? updateDoctor() : addDoctor();
  };

  const addDoctor = async () => {
    try {
      showLoading("Menyimpan data dokter...");
      const res = await fetch("http://localhost:3001/api/insertDokter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Dokter berhasil ditambahkan.");
        closeModal();
        fetchDoctors();
      } else showError("Gagal", "Tidak dapat menyimpan data.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const updateDoctor = async () => {
    try {
      showLoading("Memperbarui data dokter...");
      const res = await fetch(
        `http://localhost:3001/api/updateDokter/${editingId}`,
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
        fetchDoctors();
      } else showError("Gagal", "Tidak dapat memperbarui data.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = await showConfirmDelete(
      "Yakin ingin menghapus?",
      "Data ini tidak dapat dikembalikan!",
      "Hapus",
      "Batal"
    );
    if (!confirmDelete) return;

    try {
      showLoading("Menghapus...");
      const res = await fetch(`http://localhost:3001/api/deleteDokter/${id}`, {
        method: "DELETE",
      });
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Data berhasil dihapus.");
        fetchDoctors();
      } else showError("Gagal", "Gagal menghapus data.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const editDoctor = (item: DokterItem) => {
    setEditingId(item.id);

    const fixedImage = item.image
      ? item.image.startsWith("data:")
        ? item.image
        : `data:image/jpeg;base64,${item.image}`
      : "";

    setFormData({
      nama: item.nama,
      spesialis: item.spesialis,
      profile: item.profile,
      image: fixedImage,
      poli_id: String(item.poli_id),
    });

    setIsOpen(true);
  };

  const poliOptions = poliData.map((p) => ({
    value: String(p.id),
    label: p.nama_poli,
  }));

  const totalPages = Math.ceil(doctorData.length / itemsPerPage);
  const paginatedDoctors = doctorData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:bg-white/[0.03] dark:border-white/[0.05]">
        <div className="p-4 text-end">
          <Button
            onClick={openModal}
            className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white"
          >
            + Add Doctor
          </Button>
        </div>

        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Image
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Specialist
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Poly
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Profile
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {paginatedDoctors.map((item) => (
                <TableRow key={item.id}>
                  {/* FOTO */}
                  <TableCell className="px-4 py-4 text-center">
                    {item.image ? (
                      <img
                        src={
                          item.image.startsWith("data:")
                            ? item.image
                            : `data:image/jpeg;base64,${item.image}`
                        }
                        className="w-12 h-12 rounded object-cover mx-auto"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        No Image
                      </span>
                    )}
                  </TableCell>

                  {/* NAMA */}
                  <TableCell className="px-4 py-4 text-gray-600 dark:text-gray-300 font-medium">
                    {item.nama}
                  </TableCell>

                  {/* SPESIALIS */}
                  <TableCell className="px-4 py-4 text-gray-500 dark:text-gray-400">
                    {item.spesialis}
                  </TableCell>

                  {/* POLI */}
                  <TableCell className="px-4 py-4 text-gray-500 dark:text-gray-400">
                    {poliData.find((p) => p.id === item.poli_id)?.nama_poli ??
                      "-"}
                  </TableCell>

                  {/* PROFILE */}
                  <TableCell className="px-4 py-4 text-gray-500 dark:text-gray-400 max-w-[250px]">
                    {parseHTMLToPlainText(item.profile).slice(0, 60)}...
                  </TableCell>

                  {/* ACTION */}
                  <TableCell className=" py-4 text-center">
                    <div className="flex justify-center gap-2">
                      {/* EDUCATION BUTTON */}
                      <button
                        onClick={() => {
                          setSelectedDoctorId(item.id);
                          setEducationOpen(true);
                        }}
                        className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-theme-xs 
                          hover:bg-gradient-to-r from-emerald-500 to-emerald-400 hover:text-white 
                          dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                      >
                        <svg
                          width="18"
                          height="18"
                          className="fill-current"
                          viewBox="0 0 18 18"
                        >
                          <path d="M9 1L1 5l8 4 8-4-8-4zm0 6L3 5l6-3 6 3-6 3zM1 7v6l8 4 8-4V7l-8 4-8-4z" />
                        </svg>
                        Education
                      </button>

                      {/* SCHEDULE BUTTON */}
                      <button
                        onClick={() => {
                          setSelectedScheduleId(item.id);
                          setScheduleOpen(true);
                        }}
                        className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-theme-xs 
                          hover:bg-gradient-to-r from-purple-500 to-purple-400 hover:text-white 
                          dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                      >
                        <svg
                          width="18"
                          height="18"
                          className="fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 2v2H5v2h14V4h-2V2h-2v2H9V2H7zm12 6H5v12h14V8zm-2 4h-5v5h5v-5z" />
                        </svg>
                        Schedule
                      </button>
                      {/* EDIT BUTTON */}
                      <button
                        onClick={() => editDoctor(item)}
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
                        onClick={() => handleDelete(item.id)}
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

        <div className="flex justify-between items-center px-5 py-4">
          <p className="text-gray-600 dark:text-gray-400 text-theme-sm">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 border rounded text-gray-800 text-theme-sm dark:text-gray-400"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
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
              className="px-3 py-1 border rounded text-gray-800 text-theme-sm dark:text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px]">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4">
            {editingId ? "Edit Doctor" : "Add Doctor"}
          </h3>

          <div className="mb-3">
            <Label>Nama Dokter</Label>
            <Input
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <Label>Spesialis</Label>
            <Input
              value={formData.spesialis}
              onChange={(e) =>
                setFormData({ ...formData, spesialis: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <Label>Poli</Label>
            <Select
              options={poliOptions}
              value={
                formData.poli_id
                  ? poliOptions.find((x) => x.value === formData.poli_id)
                  : null
              }
              onChange={(opt: any) =>
                setFormData({ ...formData, poli_id: opt?.value || "" })
              }
              styles={customStyles}
            />
          </div>

          {/* QUILL PROFILE EDITOR */}
          <div className="mb-3">
            <Label>Profile</Label>
            <QuillEditor
              value={formData.profile}
              onChange={(v) => setFormData({ ...formData, profile: v })}
              placeholder="Tulis profil dokter di sini..."
              className="text-gray-800 text-theme-sm dark:text-gray-400"
            />
          </div>

          <div className="mb-3">
            <Label>Foto Dokter</Label>
            <FileInput
              onChange={(base64) => setFormData({ ...formData, image: base64 })}
            />

            {formData.image && (
              <img
                src={formData.image}
                className="w-24 h-24 mt-2 rounded object-cover"
              />
            )}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {editingId ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Modal>

      <DoctorEducationModal
        isOpen={educationOpen}
        onClose={() => setEducationOpen(false)}
        dokterId={selectedDoctorId}
      />

      <DoctorScheduleModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        dokterId={selectedScheduleId}
      />
    </>
  );
}
