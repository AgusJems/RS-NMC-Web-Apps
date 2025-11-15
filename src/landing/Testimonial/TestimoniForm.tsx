import React, { useState } from "react";

const TestimoniForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Untuk sementara tampilkan alert
    alert("Terima kasih! Testimoni Anda sudah terkirim 😊");

    // Reset form
    setForm({
      name: "",
      address: "",
      description: "",
    });
  };

  return (
    <div className="py-16">
      <div className="container max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-700 dark:text-white">
          Tambah Testimoni
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
          Silakan isi nama, alamat, dan pengalaman Anda selama di RSU An Ni’mah.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Nama */}
          <div>
            <label className="block text-gray-600 dark:text-white mb-1">Nama *</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-white"
              placeholder="Nama lengkap"
            />
          </div>

          {/* Alamat */}
          <div>
            <label className="block text-gray-600 dark:text-white mb-1">Alamat *</label>
            <input
              type="text"
              name="address"
              required
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-white"
              placeholder="Contoh: Purwokerto, Banyumas"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-gray-600 dark:text-white mb-1">Deskripsi *</label>
            <textarea
              name="description"
              required
              rows={5}
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-white"
              placeholder="Tuliskan pengalaman Anda"
            ></textarea>
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
