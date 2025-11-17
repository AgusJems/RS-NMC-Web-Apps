import { useEffect, useState } from "react";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";

import Swal from "sweetalert2";

import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "../../ui/table";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  dokterId: number | null;
}

interface EducationItem {
  id: number;
  universitas: string;
  prodi: string;
  tahun_mulai: number;
  tahun_selesai: number;
}

export default function DoctorEducationModal({
  isOpen,
  onClose,
  dokterId,
}: Props) {
  const [educationData, setEducationData] = useState<EducationItem[]>([]);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [form, setForm] = useState({
    universitas: "",
    prodi: "",
    tahun_mulai: "",
    tahun_selesai: "",
  });

  useEffect(() => {
    if (dokterId && isOpen) fetchEducation();
  }, [dokterId, isOpen]);

  const fetchEducation = async () => {
    const res = await fetch(
      `http://localhost:3001/api/getEducationByDokterId/${dokterId}`
    );
    const json = await res.json();
    setEducationData(json.data || []);
  };

  const addEducation = async () => {
    await fetch(`http://localhost:3001/api/insertEducation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dokter_id: dokterId, ...form }),
    });

    Swal.fire("Berhasil!", "Pendidikan berhasil ditambahkan.", "success");

    setForm({
      universitas: "",
      prodi: "",
      tahun_mulai: "",
      tahun_selesai: "",
    });

    fetchEducation();
  };

  const openEditModal = (item: EducationItem) => {
    setEditId(item.id);
    setForm({
      universitas: item.universitas,
      prodi: item.prodi,
      tahun_mulai: item.tahun_mulai.toString(),
      tahun_selesai: item.tahun_selesai.toString(),
    });
    setEditOpen(true);
  };

  const updateEducation = async () => {
    await fetch(`http://localhost:3001/api/updateEducation/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    Swal.fire("Berhasil!", "Data pendidikan berhasil diperbarui.", "success");

    setEditOpen(false);
    fetchEducation();
  };

  const deleteEducation = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Hapus Data?",
      text: "Data pendidikan ini tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (!confirm.isConfirmed) return;

    await fetch(`http://localhost:3001/api/deleteEducation/${id}`, {
      method: "DELETE",
    });

    Swal.fire("Dihapus!", "Data pendidikan berhasil dihapus.", "success");

    fetchEducation();
  };

  return (
    <>
      {/* MAIN MODAL */}
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1000px]">
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-8">Education</h3>

          <div className="text-end mb-4">
            <Button
              onClick={() => setAddOpen(true)}
              className="bg-emerald-500 text-white px-4 py-2 rounded-md"
            >
              + Add Education
            </Button>
          </div>

          <div className="max-w-full p-4 overflow-x-auto mb-4 border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell isHeader className="text-center text-gray-800 text-theme-sm dark:text-gray-400">Universitas</TableCell>
                  <TableCell isHeader className="text-center text-gray-800 text-theme-sm dark:text-gray-400">Prodi</TableCell>
                  <TableCell isHeader className=" text-center text-gray-800 text-theme-sm dark:text-gray-400">Tahun</TableCell>
                  <TableCell isHeader className="text-center text-gray-800 text-theme-sm dark:text-gray-400">
                    Action
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {educationData.length > 0 ? (
                  educationData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">{item.universitas}</TableCell>
                      <TableCell className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">{item.prodi}</TableCell>
                      <TableCell className="py-2 text-center text-gray-800 text-theme-sm dark:text-gray-400">
                        {item.tahun_mulai} - {item.tahun_selesai}
                      </TableCell>
                      <TableCell className="text-center flex gap-2 justify-center py-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteEducation(item.id)}
                          className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="py-4">
                      <div className="text-center text-gray-500">
                        Belum ada data pendidikan.
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </Modal>

      {/* ADD EDUCATION MODAL */}
      <Modal isOpen={addOpen} onClose={() => setAddOpen(false)} className="max-w-[600px]">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4">Tambah Pendidikan</h3>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <Label>Universitas</Label>
              <Input
                value={form.universitas}
                onChange={(e) => setForm({ ...form, universitas: e.target.value })}
              />
            </div>

            <div>
              <Label>Prodi</Label>
              <Input
                value={form.prodi}
                onChange={(e) => setForm({ ...form, prodi: e.target.value })}
              />
            </div>

            <div>
              <Label>Tahun Mulai</Label>
              <Input
                type="number"
                value={form.tahun_mulai}
                onChange={(e) => setForm({ ...form, tahun_mulai: e.target.value })}
              />
            </div>

            <div>
              <Label>Tahun Selesai</Label>
              <Input
                type="number"
                value={form.tahun_selesai}
                onChange={(e) => setForm({ ...form, tahun_selesai: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setAddOpen(false)}>
              Cancel
            </Button>

            <Button
              onClick={async () => {
                await addEducation();
                setAddOpen(false);
              }}
              className="bg-emerald-500 text-white"
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>

      {/* EDIT EDUCATION MODAL */}
      <Modal isOpen={editOpen} onClose={() => setEditOpen(false)} className="max-w-[600px]">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Edit Pendidikan</h3>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <Label>Universitas</Label>
              <Input
                value={form.universitas}
                onChange={(e) => setForm({ ...form, universitas: e.target.value })}
              />
            </div>

            <div>
              <Label>Prodi</Label>
              <Input
                value={form.prodi}
                onChange={(e) => setForm({ ...form, prodi: e.target.value })}
              />
            </div>

            <div>
              <Label>Tahun Mulai</Label>
              <Input
                type="number"
                value={form.tahun_mulai}
                onChange={(e) => setForm({ ...form, tahun_mulai: e.target.value })}
              />
            </div>

            <div>
              <Label>Tahun Selesai</Label>
              <Input
                type="number"
                value={form.tahun_selesai}
                onChange={(e) => setForm({ ...form, tahun_selesai: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setEditOpen(false)}>
              Cancel
            </Button>

            <Button
              onClick={updateEducation}
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
