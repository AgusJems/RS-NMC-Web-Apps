import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Input from "../../components/form/input/InputField";
import TextArea from "../../components/form/input/TextArea";
import { showSuccess, showError } from "../../utils/swalFire";
import { useNavigate } from "react-router-dom";
import { appSetting } from "../../../appSetting";

const TestimoniForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    deskripsi: "",
    rating: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (value: number) => {
    setForm({ ...form, rating: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.rating === 0) {
      showError("Rating Belum Dipilih", "Silakan pilih rating ⭐");
      return;
    }

    try {
      const res = await fetch(`${appSetting.apiUrl}/api/insertTestimoni`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: form.nama,
          alamat: form.alamat,
          deskripsi: form.deskripsi,
          rating: form.rating,
          status: 1,
        }),
      });

      if (res.ok) {
        showSuccess(
          "Berhasil!",
          "Terima kasih, testimoni Anda telah dikirim 😊"
        );

        navigate("/landing");

        // Reset form
        setForm({
          nama: "",
          alamat: "",
          deskripsi: "",
          rating: 0,
        });
      } else {
        showError("Gagal Mengirim", "Silakan coba lagi nanti.");
      }
    } catch (error) {
      showError("Terjadi Kesalahan", "Tidak dapat terhubung ke server.");
    }
  };

  return (
    <div className="py-16 dark:bg-black dark:text-white justify-items-center">
      <div className="container max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-700 dark:text-white">
          Testimoni Pengunjung
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
          Kami menghargai setiap masukan. Silakan isi data diri, berikan rating, 
          dan tuliskan pengalaman Anda untuk membantu peningkatan pelayanan RSU An Ni’mah.
        </p>


        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama */}
          <div>
            <label className="block text-gray-600 dark:text-white mb-1">
              Nama *
            </label>
            <Input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama lengkap"
            />
          </div>

          {/* Alamat */}
          <div>
            <label className="block text-gray-600 dark:text-white mb-1">
              Alamat *
            </label>
            <Input
              type="text"
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
              placeholder="Contoh: Purwokerto, Banyumas"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-600 dark:text-white mb-2">
              Rating *
            </label>
            <div className="flex gap-2 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`cursor-pointer ${
                    form.rating >= star ? "text-yellow-400" : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-gray-600 dark:text-white mb-1">
              Deskripsi *
            </label>
            <TextArea
              name="deskripsi"
              rows={5}
              value={form.deskripsi}
              onChange={handleChange}
              placeholder="Tuliskan pengalaman Anda"
            ></TextArea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full
              hover:scale-105 transition"
          >
            Kirim Testimoni
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimoniForm;
