import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CultureItem {
  id: number;
  name: string;
  description: string;
  img: string;
  aosDelay?: number;
}

const CultureData: CultureItem[] = [
  {
    id: 1,
    name: "NOVELTY",
    description:
      "Novelty, Insan NMC harus senantiasa siap dengan perubahan yang terjadi, sehingga memunculkan ide, inovasi yang brilian berbasis perkembangan teknologi informasi modern.",
    img: "/images/value/novelty.svg",
  },
  {
    id: 2,
    name: "INTELLIGENCE",
    description:
      "Intelligence, Insan NMC harus senantiasa menjadi manusia pembelajar, mengasah profesionalitas dan kompetensi diri.",
    img: "/images/value/intelligence.svg",
  },
  {
    id: 3,
    name: "MORAL",
    description:
      "Moral, Insan NMC harus senantiasa mengedepankan moralitas (adab) dalam setiap aktifitasnya, menjadi tauladan utama, baik di lingkungan kerja maupun masyarakat sekitarnya",
    img: "/images/value/moral.svg",
  },
  {
    id: 4,
    name: "APPRECIATIVE",
    description:
      "Appreciative, Insan NMC harus senantiasa empati, menghargai, mengapresiasi, respek terhadap hal-hal yang terjadi di lingkungan sekitar.",
    img: "/images/value/appreciative.svg",
  },
  {
    id: 5,
    name: "HAPPINESS",
    description:
      "Happiness, Insan NMC harus senantiasa ikhlas tanpa keterpaksaan dalam menjalankan aktifitasnya, sehingga akan menimbulkan kebaikan, kebahagiaan bagi dirinya maupun orang lain",
    img: "/images/value/happines.svg",
  },
];

const VisionMissionPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      {/* Banner Section */}
      <div className="min-h-[750px] flex justify-center items-center py-12 sm:py-0 dark:bg-black dark:text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image section */}
            <div data-aos="zoom-in">
              <img
                src="/images/user/erwin.svg"
                alt="Direktur RSU An Ni'mah"
                className="max-w-[500px] h-[550px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg"
              />
            </div>

            {/* Text section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-3xl font-bold"
              >
                RSU AN NI'MAH
              </h1>
              <p
                data-aos="fade-up"
                className="text-md tracking-wide leading-5"
              >
                Assalamu'alaikum warahmatullahi Wabarakatuh.
              </p>
              <p
                data-aos="fade-up"
                className="text-md tracking-wide leading-5 mb-4"
              >
                Selamat datang di RSU An Ni'mah, rumah sakit yang hadir sebagai
                wujud komitmen kami dalam memberikan pelayanan kesehatan yang
                profesional, amanah dan penuh kasih. Dengan semangat islami dan
                nilai-nilai kebaikan, kami berusaha menghadirkan layanan yang
                tidak hanya menyembuhkan, namun juga menenangkan. Terimakasih
                atas kepercayaan Anda.
              </p>
              <h2
                data-aos="fade-up"
                className="text-xl sm:text-xl font-bold"
              >
                Erwin Saleh, S.I.P., M.M.R.
              </h2>
              <h2
                data-aos="fade-up"
                className="text-xl sm:text-xl font-bold"
              >
                Direktur
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="min-h-screen px-4 py-10 dark:bg-black dark:text-white justify-items-center">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold mb-4">
            Visi & Misi RSU An Ni'mah
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Kami hadir untuk memberikan pelayanan kesehatan yang islami, unggul,
            dan humanis demi terwujudnya masyarakat yang sehat secara jasmani
            dan rohani.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10 mb-16">
          <div data-aos="fade-up">
            <h2 className="text-xl font-semibold mb-2 text-primary">Visi</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Menjadi rumah sakit yang menggerakan kebaikan - kebaikan guna
              meraih kemuliaan hidup dengan prinsip pelayanan yang islami
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-xl font-semibold mb-2 text-primary">Misi</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Mendorong setiap stakeholder untuk terus ber inovasi dan
                produktif melalui sistem kerja berbasis teknologi informasi
                terkait.
              </li>
              <li>
                Menyediakan insan rumah sakit pembelajar yang senantiasa bekerja
                secara profesional dan selalu menggali kompetensinya.
              </li>
              <li>
                Menciptakan suasana kerja yang dengan semangat saling mengasihi
                dan menyayangi antar sesama.
              </li>
              <li>
                Bersinergi dan Kolaborasi dengan entitas lain, untuk membentuk
                ekosistem yang saling menguntungkan dan memberi manfaat.
              </li>
              <li>
                Memberikan pelayanan kesehatan dengan semangat capaian mutu dan
                keselamatan pasien untuk meraih kebahagiaan bersama.
              </li>
            </ul>
          </div>
        </div>

        {/* Culture Organisasi */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Budaya Organisasi</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Nilai-nilai yang menjadi landasan dalam memberikan pelayanan terbaik.
          </p>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
          {CultureData.map(({ id, img, name, description, aosDelay }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={aosDelay}
              className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl"
            >
              <div className="p-4 text-center">
                <img
                  src={img}
                  alt={name}
                  className="max-w-[150px] mx-auto group-hover:scale-110 group-hover:translate-x-4 duration-300 mb-4"
                />
                <h3 className="text-xl font-bold text-gray-500 group-hover:text-white duration-300 mb-2">
                  {name}
                </h3>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-4 mb-3">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisionMissionPage;
