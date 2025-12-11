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
import Badge from "../../ui/badge/Badge";
import { appSetting } from "../../../../appSetting";

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
    fetch(`${appSetting.apiUrl}/api/getAllTestimoni`)
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
        `${appSetting.apiUrl}/api/updateStatusTestimoni/${editingId}`,
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
        `${appSetting.apiUrl}/api/deleteTestimoni/${id}`,
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
                  Address
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Description
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Rating
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 text-center text-gray-800 text-theme-sm dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  {/* NAMA */}
                  <TableCell className="px-5 py-4 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                    <span className="font-medium">{item.nama}</span>
                  </TableCell>

                  {/* ALAMAT */}
                  <TableCell className="px-5 py-4 text-center text-gray-800 text-theme-sm dark:text-gray-400">
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
                  <TableCell className="px-4 py-4 text-center">
                    <Badge
                      size="sm"
                      color={item.status === 1 ? "success" : "error"}
                    >
                      {item.status === 1 ? "Active" : "Non Active"}
                    </Badge>
                  </TableCell>

                  {/* ACTION */}
                  <TableCell className="px-5 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => openModal(item)}
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

                      <button
                        onClick={() => deleteTestimoni(item.id)}
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
      </div>

      {/* MODAL EDIT STATUS */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[500px]">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
            Edit Status Testimoni
          </h3>

          <Label>Status</Label>
          <div className="flex items-center gap-3 mb-5">
            <Switch
              label=""
              defaultChecked={statusValue}
              onChange={(v) => setStatusValue(v)}
            />
            <span className="text-gray-800 dark:text-gray-400">
              {statusValue ? "Active" : "Inactive"}
            </span>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={updateStatus}>Update</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
