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
import Select from "react-select";

import {
  showSuccess,
  showError,
  showConfirmDelete,
  showLoading,
  closeSwal,
} from "../../../utils/swalFire";

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0fdf4" : "white",
    borderColor: state.isFocused ? "#22c55e" : "#e5e7eb",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(34, 197, 94, 0.3)" : undefined,
    "&:hover": {
      borderColor: "#22c55e",
    },
    padding: "2px",
    fontSize: "14px",
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 9999,
    fontSize: "14px",
  }),
};

interface NewsItem {
  id: number;
  jenis_id: number;
  nama_berita: string;
  deskripsi: string;
  image: string;
  status: number;
  tanggal: string;
}

interface JenisBerita {
  id: number;
  nama: string;
}

export default function NewsTable() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [jenisData, setJenisData] = useState<JenisBerita[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    jenis_id: "",
    nama_berita: "",
    deskripsi: "",
    image: "",
    status: true,
  });

  const jenisOptions = jenisData.map((j) => ({
    value: String(j.id),
    label: j.nama,
  }));

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setEditingId(null);
    setFormData({
      jenis_id: "",
      nama_berita: "",
      deskripsi: "",
      image: "",
      status: true,
    });
  };

  useEffect(() => {
    fetchNews();
    fetchJenis();
  }, []);

  const fetchNews = () => {
    fetch("http://localhost:3001/api/getAllNews")
      .then((res) => res.json())
      .then((data) => setNewsData(data.data))
      .catch(console.error);
  };

  const fetchJenis = () => {
    fetch("http://localhost:3001/api/getJenisBerita")
      .then((res) => res.json())
      .then((data) => setJenisData(data.data))
      .catch(console.error);
  };

  const handleSubmitNews = () => {
    editingId ? updateNews() : addNews();
  };

  const addNews = async () => {
    try {
      showLoading("Menyimpan berita...");
      const res = await fetch("http://localhost:3001/api/insertDetailNews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Berita berhasil ditambahkan.");
        closeModal();
        fetchNews();
      } else showError("Gagal", "Tidak dapat menyimpan berita.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const updateNews = async () => {
    try {
      showLoading("Memperbarui berita...");
      const res = await fetch(
        `http://localhost:3001/api/updateNews/${editingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Berita berhasil diperbarui.");
        closeModal();
        fetchNews();
      } else showError("Gagal", "Tidak dapat memperbarui berita.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan.");
    }
  };

  const handleDeleteNews = async (id: number) => {
    const confirmDelete = await showConfirmDelete(
      "Yakin ingin menghapus?",
      "Berita ini tidak bisa dikembalikan!",
      "Hapus",
      "Batal"
    );
    if (!confirmDelete) return;

    try {
      showLoading("Menghapus...");
      const res = await fetch(`http://localhost:3001/api/deleteNews/${id}`, {
        method: "DELETE",
      });
      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Berita berhasil dihapus.");
        fetchNews();
      } else showError("Gagal", "Gagal menghapus berita.");
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan saat menghapus.");
    }
  };

  const editNews = (item: NewsItem) => {
    setEditingId(item.id);
    setFormData({
      jenis_id: String(item.jenis_id),
      nama_berita: item.nama_berita,
      deskripsi: item.deskripsi,
      image: item.image,
      status: item.status === 1,
    });
    setIsOpen(true);
  };

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const paginatedNews = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* TABLE WRAPPER */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="p-4 text-end">
            <Button
              onClick={openModal}
              className="mb-4 px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 hover:scale-105 duration-200 text-white"
            >
              + Tambah Berita
            </Button>
          </div>

          {/* TABLE */}
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 text-center">
                  Jenis
                </TableCell>
                <TableCell isHeader className="px-5 text-center">
                  Judul
                </TableCell>
                <TableCell isHeader className="px-5 text-center">
                  Deskripsi
                </TableCell>
                <TableCell isHeader className="px-5 text-center">
                  Tanggal
                </TableCell>
                <TableCell isHeader className="px-5 text-center">
                  Status
                </TableCell>
                <TableCell isHeader className="px-5 text-center">
                  Gambar
                </TableCell>
                <TableCell isHeader className="px-5 text-center">
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {paginatedNews.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-4 py-4 text-center min-w-[180px]">
                    {jenisData.find((j) => j.id === item.jenis_id)?.nama ?? "-"}
                  </TableCell>

                  <TableCell className="px-4 py-4 text-center">
                    <div className="prose prose-sm max-w-none dark:prose-invert line-clamp-1">
                      {item.nama_berita}
                    </div>
                  </TableCell>

                  <TableCell className="px-4 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                    <div
                      className="prose prose-sm max-w-none dark:prose-invert line-clamp-1"
                      dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                    />
                  </TableCell>

                  <TableCell className="px-4 py-4 text-center text-gray-500">
                    {new Date(item.tanggal).toLocaleDateString()}
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
                    <div className="flex justify-center gap-2">
                      {/* EDIT BUTTON */}
                      <button
                        onClick={() => editNews(item)}
                        className="flex gap-2 items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-theme-xs hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white"
                      >
                        Edit
                      </button>

                      {/* DELETE BUTTON */}
                      <button
                        onClick={() => handleDeleteNews(item.id)}
                        className="flex gap-2 items-center rounded-full border border-red-300 bg-white px-4 py-2 text-sm text-red-700 shadow-theme-xs hover:bg-gradient-to-r from-red-500 to-red-400 hover:text-white"
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
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm border rounded ${
                  currentPage === page
                    ? "bg-green-500 text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL ADD/EDIT --- */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[1000px] m-4"
      >
        <div className="relative w-full p-6 lg:p-10 bg-white rounded-3xl dark:bg-gray-900">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            {editingId ? "Edit Berita" : "Tambah Berita"}
          </h4>

          {/* Jenis Berita */}
          <div className="mb-3">
  <Label>Jenis Berita</Label>
  <Select
    options={jenisOptions}
    value={
      formData.jenis_id
        ? jenisOptions.find((opt) => opt.value === String(formData.jenis_id))
        : null
    }
    onChange={(selected: any) =>
      setFormData({
        ...formData,
        jenis_id: selected?.value || "",
      })
    }
    styles={customStyles}
    placeholder="Pilih Jenis Berita"
    classNamePrefix="react-select"
  />
</div>


          {/* Judul */}
          <div className="mb-3">
            <Label>Judul</Label>
            <Input
              type="text"
              placeholder="Judul"
              value={formData.nama_berita}
              onChange={(e) =>
                setFormData({ ...formData, nama_berita: e.target.value })
              }
            />
          </div>

          {/* Deskripsi */}
          <div className="mb-3">
            <Label>Deskripsi</Label>
            <QuillEditor
              value={formData.deskripsi}
              onChange={(v) => setFormData({ ...formData, deskripsi: v })}
              placeholder="Tulis deskripsi berita di sini..."
            />
          </div>

          {/* Upload Image */}
          <div className="mb-3">
            <Label>Upload Gambar</Label>
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

          {/* Status saat edit */}
          {editingId && (
            <div className="mb-3">
              <Label>Status</Label>
              <div className="flex items-center gap-3">
                <Switch
                  label=""
                  defaultChecked={formData.status}
                  onChange={(v) => setFormData({ ...formData, status: v })}
                />
                <span>{formData.status ? "Aktif" : "Non Aktif"}</span>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Batal
            </Button>
            <Button size="sm" onClick={handleSubmitNews}>
              {editingId ? "Update" : "Simpan"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
