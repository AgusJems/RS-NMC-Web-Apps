import { useEffect, useState } from "react";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";

import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "../../ui/table";

import Swal from "sweetalert2";
import Select from "react-select";

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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  dokterId: number | null;
}

interface ScheduleItem {
  id: number;
  hari_id: number;
  hari: string;
  jam_mulai: string;
  jam_selesai: string;
}

export default function DoctorScheduleModal({
  isOpen,
  onClose,
  dokterId,
}: Props) {
  const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([]);
  const [hariList, setHariList] = useState<{ id: number; nama: string }[]>([]);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [editItem, setEditItem] = useState<ScheduleItem | null>(null);

  // FORM pakai NUMBER agar react-select match
  const [form, setForm] = useState({
    hari_id: 0,
    jam_mulai: "",
    jam_selesai: "",
  });

  // Dropdown Options (value: number)
  const hariOptions = hariList.map((h) => ({
    value: h.id,
    label: h.nama,
  }));

  useEffect(() => {
    if (dokterId && isOpen) {
      fetchSchedule();
      fetchHari();
    }
  }, [dokterId, isOpen]);

  const fetchSchedule = async () => {
    const res = await fetch(
      `http://localhost:3001/api/getScheduleByDokterId/${dokterId}`
    );
    const json = await res.json();
    setScheduleData(json.data || []);
  };

  const fetchHari = async () => {
    const res = await fetch(`http://localhost:3001/api/getAllHari`);
    const json = await res.json();
    setHariList(json.data || []);
  };

  const addSchedule = async () => {
    await fetch(`http://localhost:3001/api/insertSchedule`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dokter_id: dokterId, ...form }),
    });

    Swal.fire("Berhasil!", "Jadwal berhasil ditambahkan.", "success");

    setForm({ hari_id: 0, jam_mulai: "", jam_selesai: "" });
    fetchSchedule();
  };

  const updateSchedule = async () => {
    if (!editItem) return;

    await fetch(`http://localhost:3001/api/updateSchedule/${editItem.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    Swal.fire("Berhasil!", "Jadwal berhasil diperbarui.", "success");

    setEditItem(null);
    setEditOpen(false);
    fetchSchedule();
  };

  const deleteSchedule = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Hapus Jadwal?",
      text: "Data jadwal ini tidak dapat dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (!confirm.isConfirmed) return;

    await fetch(`http://localhost:3001/api/deleteSchedule/${id}`, {
      method: "DELETE",
    });

    Swal.fire("Dihapus!", "Jadwal berhasil dihapus.", "success");

    fetchSchedule();
  };

  return (
    <>
      {/* MAIN MODAL */}
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1000px]">
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-8">Schedule</h3>

          <div className="text-end mb-4">
            <Button
              onClick={() => setAddOpen(true)}
              className="bg-emerald-500 text-white px-4 py-2 rounded-md"
            >
              + Add Schedule
            </Button>
          </div>

          <div className="max-w-full p-4 overflow-x-auto mb-4 border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell isHeader className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">Hari</TableCell>
                  <TableCell isHeader className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">Jam Mulai</TableCell>
                  <TableCell isHeader className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">Jam Selesai</TableCell>
                  <TableCell isHeader className="text-center text-gray-800 text-theme-sm dark:text-gray-400">
                    Action
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {scheduleData.length > 0 ? (
                  scheduleData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">{item.hari}</TableCell>
                      <TableCell className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">{item.jam_mulai.replace(":00", "")}</TableCell>
                      <TableCell className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">{item.jam_selesai.replace(":00", "")}</TableCell>
                      <TableCell className="text-center flex gap-2 justify-center py-2">
                        <button
                          onClick={() => {
                            setEditItem(item);
                            setForm({
                              hari_id: item.hari_id,
                              jam_mulai: item.jam_mulai,
                              jam_selesai: item.jam_selesai,
                            });
                            setEditOpen(true);
                          }}
                          className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteSchedule(item.id)}
                          className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="py-4 text-center text-gray-500">
                      Belum ada jadwal praktik.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </Modal>

      {/* ADD MODAL */}
      <Modal
        isOpen={addOpen}
        onClose={() => setAddOpen(false)}
        className="max-w-[500px]"
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4">Tambah Jadwal</h3>

          <div className="flex flex-col gap-4 mb-4">
            <div>
              <Label>Hari</Label>
              <Select
                options={hariOptions}
                value={
                  hariOptions.find((opt) => opt.value === form.hari_id) || null
                }
                onChange={(selected: any) =>
                  setForm({ ...form, hari_id: Number(selected?.value) })
                }
                styles={customStyles}
                placeholder="Pilih Hari"
                classNamePrefix="react-select"
              />
            </div>

            <div>
              <Label>Jam Mulai</Label>
              <Input
                type="time"
                value={form.jam_mulai}
                onChange={(e) =>
                  setForm({ ...form, jam_mulai: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Jam Selesai</Label>
              <Input
                type="time"
                value={form.jam_selesai}
                onChange={(e) =>
                  setForm({ ...form, jam_selesai: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setAddOpen(false)}>
              Cancel
            </Button>

            <Button
              onClick={async () => {
                await addSchedule();
                setAddOpen(false);
              }}
              className="bg-emerald-500 text-white"
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>

      {/* EDIT MODAL */}
      <Modal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        className="max-w-[500px]"
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4">Edit Jadwal</h3>

          <div className="flex flex-col gap-4 mb-4">
            <div>
              <Label>Hari</Label>
              <Select
                options={hariOptions}
                value={
                  hariOptions.find((opt) => opt.value === form.hari_id) || null
                }
                onChange={(selected: any) =>
                  setForm({ ...form, hari_id: Number(selected?.value) })
                }
                styles={customStyles}
                placeholder="Pilih Hari"
                classNamePrefix="react-select"
              />
            </div>

            <div>
              <Label>Jam Mulai</Label>
              <Input
                type="time"
                value={form.jam_mulai}
                onChange={(e) =>
                  setForm({ ...form, jam_mulai: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Jam Selesai</Label>
              <Input
                type="time"
                value={form.jam_selesai}
                onChange={(e) =>
                  setForm({ ...form, jam_selesai: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setEditOpen(false)}>
              Cancel
            </Button>

            <Button
              onClick={async () => {
                await updateSchedule();
                setEditOpen(false);
              }}
              className="bg-blue-500 text-white"
            >
              Update
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
