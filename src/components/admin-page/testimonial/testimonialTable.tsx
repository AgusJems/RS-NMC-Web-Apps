import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import Switch from "../../form/switch/Switch";
import Label from "../../form/Label";

import {
  showSuccess,
  showError,
  showConfirmDelete,
  showLoading,
  closeSwal,
} from "../../../utils/swalFire";

interface Testimoni {
  id: number;
  nama: string;
  alamat: string;
  deskripsi: string;
  rating: number;
  status: number;
}

export default function TestimonialTable() {
  const [data, setData] = useState<Testimoni[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [statusValue, setStatusValue] = useState(true);

  useEffect(() => {
    fetchTestimoni();
  }, []);

  const fetchTestimoni = () => {
    fetch("http://localhost:3001/api/getAllTestimoni")
      .then((res) => res.json())
      .then((res) => setData(res.data || []))
      .catch(() => console.log("Failed fetch testimoni"));
  };

  const openModal = (item: Testimoni) => {
    setEditingId(item.id);
    setStatusValue(item.status === 1);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const updateStatus = async () => {
    try {
      showLoading("Memperbarui status...");

      const res = await fetch(
        `http://localhost:3001/api/updateStatusTestimoni/${editingId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status: statusValue ? 1 : 0,
          }),
        }
      );

      closeSwal();

      if (!res.ok) return showError("Gagal", "Tidak dapat memperbarui status.");

      showSuccess("Berhasil", "Status testimoni diperbarui.");
      closeModal();
      fetchTestimoni();
    } catch {
      closeSwal();
      showError("Error", "Terjadi kesalahan server.");
    }
  };

  const deleteTestimoni = async (id: number) => {
    const confirmDel = await showConfirmDelete(
      "Yakin hapus?",
      "Testimoni tidak dapat dikembalikan!",
      "Hapus",
      "Batal"
    );

    if (!confirmDel) return;

    try {
      showLoading("Menghapus...");
      const res = await fetch(
        `http://localhost:3001/api/deleteTestimoni/${id}`,
        { method: "DELETE" }
      );

      closeSwal();

      if (res.ok) {
        showSuccess("Berhasil", "Testimoni dihapus.");
        fetchTestimoni();
      } else {
        showError("Gagal", "Tidak dapat menghapus testimoni.");
      }
    } catch {
      closeSwal();
      showError("Error", "Kesalahan saat menghapus.");
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:bg-white/[0.03] dark:border-white/[0.05]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="px-5 text-center">Nama</TableCell>
                <TableCell isHeader className="px-5 text-center">Alamat</TableCell>
                <TableCell isHeader className="px-5 text-center">Deskripsi</TableCell>
                <TableCell isHeader className="px-5 text-center">Rating</TableCell>
                <TableCell isHeader className="px-5 text-center">Status</TableCell>
                <TableCell isHeader className="px-5 text-center">Aksi</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  
                  {/* NAMA */}
                  <TableCell className="px-5 py-4 text-center">
                    <span className="font-medium">{item.nama}</span>
                  </TableCell>

                  {/* ALAMAT */}
                  <TableCell className="px-5 py-4 text-center text-gray-500">
                    {item.alamat}
                  </TableCell>

                  {/* DESKRIPSI */}
                  <TableCell className="px-5 py-4 text-gray-500">
                    <div
                      className="prose prose-sm max-w-none line-clamp-2 dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                    />
                  </TableCell>

                  {/* RATING */}
                  <TableCell className="px-5 py-4 text-center">
                    {"⭐".repeat(item.rating)}
                  </TableCell>

                  {/* STATUS */}
                  <TableCell className="px-5 py-4 text-center">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        item.status === 1
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.status === 1 ? "Active" : "Inactive"}
                    </span>
                  </TableCell>

                  {/* ACTION */}
                  <TableCell className="px-5 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => openModal(item)}
                        className="rounded-full border px-4 py-2 text-sm hover:bg-blue-500 hover:text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteTestimoni(item.id)}
                        className="rounded-full border px-4 py-2 text-sm hover:bg-red-500 hover:text-white"
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
      </div>

      {/* MODAL EDIT STATUS */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[500px]">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Edit Status Testimoni</h3>

          <Label>Status</Label>
          <div className="flex items-center gap-3 mb-5">
            <Switch
              label=""
              defaultChecked={statusValue}
              onChange={(v) => setStatusValue(v)}
            />
            <span>{statusValue ? "Active" : "Inactive"}</span>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={closeModal}>Cancel</Button>
            <Button onClick={updateStatus}>Update</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
