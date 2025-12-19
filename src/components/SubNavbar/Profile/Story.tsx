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
    text: "Seiring perkembangan jaman dan jumlah kunjungan yang terus meningkat serta kebutuhan masyarakat Wangon pada khususnya dan masyarakat sekitarnya pada umumnya akan sarana dan prasarana serta pelayanan kesehatan yang terus meningkat maka status Klinik Bersalin meningkat menjadi Rumah Sakit Ibu dan Anak AN NI’MAH ...",
    img: "/images/story/story1.jpg",
  },
  {
    id: 3,
    name: "Kerjasama dengan BPJS Kesehatan tahun 2020",
    text: "Berdasarkan Surat Rekomendasi dari Dinas Kesehatan Kabupaten Banyumas ... memberikan izin operasional Rumah Sakit Kelas D pada Rumah Sakit Umum AN NI’MAH.",
    img: "/images/story/story2.jpg",
  },
  {
    id: 4,
    name: "Akreditasi LULUS TINGKAT PERDANA tahun 2022",
    text: "Selain itu peningkatan pelayanan juga diupayakan melalui assesment akreditasi rumah sakit ... dengan status terakreditasi: LULUS TINGKAT PERDANA.",
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
                    <h2 className="text-md sm:text-xl font-bold text-black/80 dark:text-white">
                      {data.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {data.text}
                    </p>
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
