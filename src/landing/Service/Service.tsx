import React from "react";
import { Link } from "react-router-dom";

const ServiceData = [
  {
    id: 1,
    img: "/images/service-logo/radar.svg",
    name: "Rawat Darurat",
    description:
      "Rawat Darurat merupakan layanan untuk memberikan pertolongan pertama pada pasien-pasien gawat darurat.",
    link: "emergency-care",
    aosDelay: "300",
  },
  {
    id: 2,
    img: "/images/service-logo/rajal.svg",
    name: "Rawat Jalan",
    description:
      "Rawat Darurat merupakan layanan untuk memberikan pertolongan pertama pada pasien-pasien gawat darurat.",
    link: "outpatient",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/images/service-logo/rawat-inap.svg",
    name: "Rawat Inap",
    description:
      "Rawat Darurat merupakan layanan untuk memberikan pertolongan pertama pada pasien-pasien gawat darurat.",
    link: "inpatient",
    aosDelay: "300",
  },
  {
    id: 4,
    img: "/images/service-logo/penunjang1.svg",
    name: "Penunjang",
    description:
      "Rawat Darurat merupakan layanan untuk memberikan pertolongan pertama pada pasien-pasien gawat darurat.",
    link: "support",
    aosDelay: "300",
  },
];

const Service: React.FC = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark text-black dark:text-white justify-items-center">
      <div className="container">
        {/* Header section */}
        <div data-aos="fade-up" className="text-center mb-10">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Services
          </p>
          <h1 className="text-3xl font-bold text-gray-500 dark:text-white mb-2">Layanan Kami</h1>
          <p className="text-md text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Service card section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
          {ServiceData.map(({ id, img, name, description, link, aosDelay }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={aosDelay}
              className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl"
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
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm mb-3">
                  {description}
                </p>
                <Link to={`/service/${link}`} className="text-center">
                  <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
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
