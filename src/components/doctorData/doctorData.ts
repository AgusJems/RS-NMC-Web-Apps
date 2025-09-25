export interface DoctorList {
  id: number;
  name: string;
  specialist: string;
  profile: string;
  education: string;
  experience: string[];
  schedule: Record<string, string>;
  aosDelay?: number | string;
  img: string; // <-- pakai string, jangan fixed literal
}

const DoctorData: DoctorList[] = [
  {
    id: 1,
    name: "Agus Jems S.Kom, M.Kom, Ph.D",
    specialist: "Dokter Spesialis Anak",
    profile: `
      dr. Muhammad Hidayat, M.Ked(Ped)., Sp.A merupakan seorang Dokter Anak. 
      Beliau dapat membantu layanan Penyakit Pencernaan (Muntaber, Diare), 
      Penyakit Pernafasan (Batuk, Pilek Sesak, TB/Flek Anak, Asma), 
      Masalah Pertumbuhan dan Perkembangan Anak (Susah makan, Berat badan susah naik, Mudah sakit), 
      Imunisasi (Hepatitis, Polio, BCG, Campak, Booster), Tifoid, Demam Berdarah, Kejang.

      dr. Muhammad Hidayat menamatkan pendidikan Dokter Spesialis Anak di Universitas Sumatera Utara. 
      Beliau juga tercatat sebagai anggota Ikatan Dokter Anak Indonesia (IDAI).
    `,
    education: "Sp.A - Spesialis Anak - Universitas Sumatera Utara",
    experience: [
      "Dokter Spesialis Anak - RSU Raffa Majenang",
      "Dokter Spesialis Anak - RS Pricillia Medical Center",
    ],
    schedule: {
      Senin: "09.00-11.00",
      Selasa: "09.00-11.00",
      Rabu: "09.00-11.00",
      Kamis: "09.00-11.00",
      Jumat: "09.00-11.00",
    },
    img: "/images/user/owner.png", // path relatif ke public/
  },
  {
    id: 2,
    name: "Agus Jems S.Kom, M.Kom, Ph.D",
    specialist: "Dokter Spesialis Anak",
    profile: `
      dr. Muhammad Hidayat, M.Ked(Ped)., Sp.A merupakan seorang Dokter Anak. 
      Beliau dapat membantu layanan Penyakit Pencernaan (Muntaber, Diare), 
      Penyakit Pernafasan (Batuk, Pilek Sesak, TB/Flek Anak, Asma), 
      Masalah Pertumbuhan dan Perkembangan Anak (Susah makan, Berat badan susah naik, Mudah sakit), 
      Imunisasi (Hepatitis, Polio, BCG, Campak, Booster), Tifoid, Demam Berdarah, Kejang.

      dr. Muhammad Hidayat menamatkan pendidikan Dokter Spesialis Anak di Universitas Sumatera Utara. 
      Beliau juga tercatat sebagai anggota Ikatan Dokter Anak Indonesia (IDAI).
    `,
    education: "Sp.A - Spesialis Anak - Universitas Sumatera Utara",
    experience: [
      "Dokter Spesialis Anak - RSU Raffa Majenang",
      "Dokter Spesialis Anak - RS Pricillia Medical Center",
    ],
    schedule: {
      Senin: "09.00-11.00",
      Selasa: "09.00-11.00",
      Rabu: "09.00-11.00",
      Kamis: "09.00-11.00",
      Jumat: "09.00-11.00",
    },
    img: "/images/user/owner.png", // path relatif ke public/
  },
  {
    id: 3,
    name: "Agus Jems S.Kom, M.Kom, Ph.D",
    specialist: "Dokter Spesialis Anak",
    profile: `
      dr. Muhammad Hidayat, M.Ked(Ped)., Sp.A merupakan seorang Dokter Anak. 
      Beliau dapat membantu layanan Penyakit Pencernaan (Muntaber, Diare), 
      Penyakit Pernafasan (Batuk, Pilek Sesak, TB/Flek Anak, Asma), 
      Masalah Pertumbuhan dan Perkembangan Anak (Susah makan, Berat badan susah naik, Mudah sakit), 
      Imunisasi (Hepatitis, Polio, BCG, Campak, Booster), Tifoid, Demam Berdarah, Kejang.

      dr. Muhammad Hidayat menamatkan pendidikan Dokter Spesialis Anak di Universitas Sumatera Utara. 
      Beliau juga tercatat sebagai anggota Ikatan Dokter Anak Indonesia (IDAI).
    `,
    education: "Sp.A - Spesialis Anak - Universitas Sumatera Utara",
    experience: [
      "Dokter Spesialis Anak - RSU Raffa Majenang",
      "Dokter Spesialis Anak - RS Pricillia Medical Center",
    ],
    schedule: {
      Senin: "09.00-11.00",
      Selasa: "09.00-11.00",
      Rabu: "09.00-11.00",
      Kamis: "09.00-11.00",
      Jumat: "09.00-11.00",
    },
    img: "/images/user/owner.png", // path relatif ke public/
  },
  {
    id: 4,
    name: "Agus Jems S.Kom, M.Kom, Ph.D",
    specialist: "Dokter Spesialis Anak",
    profile: `
      dr. Muhammad Hidayat, M.Ked(Ped)., Sp.A merupakan seorang Dokter Anak. 
      Beliau dapat membantu layanan Penyakit Pencernaan (Muntaber, Diare), 
      Penyakit Pernafasan (Batuk, Pilek Sesak, TB/Flek Anak, Asma), 
      Masalah Pertumbuhan dan Perkembangan Anak (Susah makan, Berat badan susah naik, Mudah sakit), 
      Imunisasi (Hepatitis, Polio, BCG, Campak, Booster), Tifoid, Demam Berdarah, Kejang.

      dr. Muhammad Hidayat menamatkan pendidikan Dokter Spesialis Anak di Universitas Sumatera Utara. 
      Beliau juga tercatat sebagai anggota Ikatan Dokter Anak Indonesia (IDAI).
    `,
    education: "Sp.A - Spesialis Anak - Universitas Sumatera Utara",
    experience: [
      "Dokter Spesialis Anak - RSU Raffa Majenang",
      "Dokter Spesialis Anak - RS Pricillia Medical Center",
    ],
    schedule: {
      Senin: "09.00-11.00",
      Selasa: "09.00-11.00",
      Rabu: "09.00-11.00",
      Kamis: "09.00-11.00",
      Jumat: "09.00-11.00",
    },
    img: "/images/user/owner.png", // path relatif ke public/
  },
  {
    id: 5,
    name: "Agus Jems S.Kom, M.Kom, Ph.D",
    specialist: "Dokter Spesialis Anak",
    profile: `
      dr. Muhammad Hidayat, M.Ked(Ped)., Sp.A merupakan seorang Dokter Anak. 
      Beliau dapat membantu layanan Penyakit Pencernaan (Muntaber, Diare), 
      Penyakit Pernafasan (Batuk, Pilek Sesak, TB/Flek Anak, Asma), 
      Masalah Pertumbuhan dan Perkembangan Anak (Susah makan, Berat badan susah naik, Mudah sakit), 
      Imunisasi (Hepatitis, Polio, BCG, Campak, Booster), Tifoid, Demam Berdarah, Kejang.

      dr. Muhammad Hidayat menamatkan pendidikan Dokter Spesialis Anak di Universitas Sumatera Utara. 
      Beliau juga tercatat sebagai anggota Ikatan Dokter Anak Indonesia (IDAI).
    `,
    education: "Sp.A - Spesialis Anak - Universitas Sumatera Utara",
    experience: [
      "Dokter Spesialis Anak - RSU Raffa Majenang",
      "Dokter Spesialis Anak - RS Pricillia Medical Center",
    ],
    schedule: {
      Senin: "09.00-11.00",
      Selasa: "09.00-11.00",
      Rabu: "09.00-11.00",
      Kamis: "09.00-11.00",
      Jumat: "09.00-11.00",
    },
    img: "/images/user/owner.png", // path relatif ke public/
  },
];

export default DoctorData;
