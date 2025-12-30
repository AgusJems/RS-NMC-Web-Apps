import React from "react";
import { Link } from "react-router-dom";

const ServiceData = [
  {
    id: 1,
    img: "/images/service-logo/radar.svg",
    name: "Rawat Darurat",
    description:
      "Layanan gawat darurat 24 jam dengan penanganan cepat dan profesional bagi pasien kritis.",
    link: "emergency-care",
    aosDelay: "300",
  },
  {
    id: 2,
    img: "/images/service-logo/rajal.svg",
    name: "Rawat Jalan",
    description:
      "Layanan konsultasi dan pemeriksaan dokter spesialis tanpa perlu rawat inap dengan pelayanan cepat.",
    link: "outpatient",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/images/service-logo/ranap.svg",
    name: "Rawat Inap",
    description:
      "Perawatan pasien 24 jam dengan fasilitas nyaman dan tenaga medis berpengalaman.",
    link: "inpatient",
    aosDelay: "300",
  },
  {
    id: 4,
    img: "/images/service-logo/penunjang.svg",
    name: "Penunjang",
    description:
      "Didukung layanan laboratorium, radiologi, dan farmasi yang lengkap.",
    link: "support",
    aosDelay: "300",
  },
];

const Service: React.FC = () => {
  return (
    <div className="py-10 text-black dark:text-white justify-items-center">
      <div className="container px-4">
        {/* Header section */}
        <div data-aos="fade-up" className="text-center mb-10">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Services
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 dark:text-white mb-2">Layanan Kami</h1>
          <p className="text-sm sm:text-md text-gray-400">
            Rumah Sakit Umum AN NI`MAH menghadirkan layanan kesehatan terpadu yang didukung oleh tenaga medis yang kompeten, <br></br> fasilitas modern dan komitmen untuk memberikan perawatan terbaik bagi setiap pasien.
          </p>
        </div>

        {/* Service card section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-4 place-items-center">
          {ServiceData.map(({ id, img, name, description, link, aosDelay }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={aosDelay}
              className="max-w-[300px] min-h-[380px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl"
            >
              {/* Image section */}
              <div className="p-4 text-center">
                <img
                  src={img}
                  alt={name}
                  className="max-w-[200px] mx-auto group-hover:scale-110 group-hover:translate-x-4 duration-300 mb-3"
                />
                <h1 className="text-xl font-bold text-gray-500 group-hover:text-white duration-300 mb-2">
                  {name}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm mb-3 line-clamp-3">
                  {description}
                </p>
                <Link to={`/service/${link}`} className="text-center">
                  <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 sm:px-6 py-2 sm:py-3 text-sm sm:text-md rounded-full hover:scale-105 duration-200 cursor-pointer">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
