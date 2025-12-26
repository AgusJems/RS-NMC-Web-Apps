import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface StoryItem {
  id: number;
  name: string;
  text: string;
  img: string;
}

const StoryData: StoryItem[] = [
  {
    id: 1,
    name: "Awal Berdiri tahun 1999",
    text: "Pada Awalnya Rumah Sakit Umum AN NI`MAH adalah sebuah klinik bersalin AN NI`MAH. Saat pertama kali beroperasi, layanan yang ada meluputi poliklinik umum, poliklink kesehatan ibu dan anak, dan poliklinik keluarga berencana",
    img: "/images/story/story1.jpg",
  },
  {
    id: 2,
    name: "Pengembangan RSIA (Rumah Sakit Ibu dan Anak) tahun 2005",
    text: "Seiring perkembangan jaman dan jumlah kunjungan yang terus meningkat serta kebutuhan masyarakat Wangon pada khususnya dan masyarakat sekitarnya pada umumnya akan sarana dan prasarana serta pelayanan kesehatan yang terus meningkat maka status Klinik Bersalin meningkat menjadi Rumah Sakit Ibu dan Anak AN NI’MAH yang didirikan dan diresmikan pada tanggal 5 Juni 2005 oleh Yayasan Arrahman Aryana.",
    img: "/images/story/story1.jpg",
  },
  {
    id: 3,
    name: "Kerjasama dengan BPJS Kesehatan tahun 2020",
    text: "Berdasarkan Surat Rekomendasi dari Dinas Kesehatan Kabupaten Banyumas pada tanggal 14 April 2020 atas Permohonan Ijin Mendirikan Rumah Sakit Umum AN NI’MAH telah di verifikasi dan telah memenuhi persyaratan sehingga turunlah Keputusan Kepala Badan Penanaman Modal dan Pelayanan Perizinan Kabupaten Banyumas Nomor 503/IMRS/001/BPMPP/2015 Tentang Izin Mendirikan Rumah Sakit pada tanggal 01 April 2015 di bawah naungan PT. ALZHA ARRAHMAN ARYANA. Untuk Perpanjangan Izin Operasional Rumah Sakit tersebut maka terbit pula Surat Keputusan Kepala Dinas Kesehatan Kabupaten Banyumas Nomor 503/IORS.P/004/IV/2020 tentang Izin Operasional tanggal 14 April 2020 memutuskan memberikan izin operasional Rumah Sakit Kelas D pada Rumah Sakit Umum AN NI’MAH.",
    img: "/images/story/story2.jpg",
  },
  {
    id: 4,
    name: "Akreditasi LULUS TINGKAT PERDANA tahun 2022",
    text: "Selain itu peningkatan pelayanan juga diupayakan melalui assesment akreditasi rumah sakit yang dibuktikan dengan terbitnya sertifikat dari Komisi Akreditasi Rumah Sakit Nomor KARS-SERT/Per/502/I/2022, dengan status terakreditasi: LULUS TINGKAT PERDANA, yang berlaku mulai tanggal 14 Januari 2022. Pengakuan KARS tersebut pada dasarnya adalah pengakuan telah terpenuhinya standar pelayanan rumah sakit yang meliputi 16 (enam belas) pelayanan yang terdiri dari: Administrasi dan Manajemen; Pelayanan Medis; Pelayanan Gawat Darurat; Pelayanan Keperawatan; Rekam Medis; Pelayanan Farmasi; K3; Pelayanan Radiologi; Pelayanan Laboratorium; Pelayanan Kamar Operasi; Pelayanan pengendalian Infeksi di RS; Pelayanan Perinatal Resiko Tinggi; Pelayanan Gizi; Pelayanan Intensif; Pelayanan Kamar Bersalin dan Pelayanan Darah.",
    img: "/images/story/story2.jpg",
  },
];

const StoryPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <div className="py-10 dark:bg-black dark:text-white justify-items-center">
        <div className="container min-h-screen px-4">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1
              data-aos="fade-up"
              className="text-xl sm:text-2xl font-bold text-center mb-6"
            >
              Perjalanan Sejarah RSU Anni'mah
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
              Dalam perjalanan panjangnya, RSU Anni’mah telah menjadi saksi
              tumbuhnya pelayanan kesehatan yang berpihak pada rakyat. Dari
              fasilitas sederhana hingga menjadi pusat pelayanan unggulan, sejarah
              kami adalah kisah dedikasi dan perubahan.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            data-aos="zoom-in"
          >
            {StoryData.map((data) => (
              <div key={data.id} className="cursor-pointer">
                <div className="flex flex-col gap-4 shadow-lg py-6 px-4 rounded-xl dark:bg-gray-800">
                  <div className="relative w-full h-[250px] sm:h-[450px] rounded-lg overflow-hidden mb-2">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative group/title">
                    <h1 className="text-lg font-semibold text-black/80 dark:text-white line-clamp-2">
                      {data.name}
                    </h1>

                    <div
                      className="pointer-events-none absolute z-30 hidden group-hover/title:block
                                bg-black text-white text-xs rounded-md
                                px-3 py-2 max-w-sm shadow-lg
                                -top-2 left-0 translate-y-[-100%]">
                      {data.name}
                    </div>
                  </div>

                  <div className="relative group/desc mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-0 sm:line-clamp-4">
                      {data.text}
                    </p>

                    <div
                      className="pointer-events-none absolute z-30 hidden group-hover/desc:block
                                bg-black text-white text-xs rounded-md
                                px-3 py-2 max-w-sm shadow-lg
                                -top-2 left-0 translate-y-[-100%]">
                      {data.text}
                    </div>
                  </div>
                    {/* <h2 className="text-md sm:text-xl font-bold text-black/80 dark:text-white">
                      {data.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {data.text}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryPage;
