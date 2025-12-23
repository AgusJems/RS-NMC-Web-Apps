import React from "react";
import { Link } from "react-router-dom";

const SimrsData = [
  {
    id: 1,
    img: "/images/service-logo/absensi.svg",
    name: "Absensi",
    description:
      "Buka Aplikasi Absensi. Tutorial Installasi bisa diakses melalui tautan berikut:",
    link: "http://annimah-online.com/live/epresensi_web/index.php/app/auth/login",
    button: "Buka Aplikasi Absensi",
    aosDelay: "300",
  },
  {
    id: 2,
    img: "/images/service-logo/simrs.svg",
    name: "SIMRS",
    description: "Akses Sistem Informasi Manajemen Rumah Sakit (SIMRS) untuk mendukung pelayanan medis, administrasi, dan manajemen secara terintegrasi dan efisien.",
    button: "Buka Aplikasi SIMRS",
    link: "http://192.168.2.245/live/simrs/index.php/app/auth/login",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/images/service-logo/registrasi.svg",
    name: "Pembuatan Akun",
    description: "Ajukan pembuatan akun SIMRS untuk memperoleh akses layanan sistem sesuai peran dan kewenangan pengguna.",
    button: "Ajukan Akun",
    link: "http://bit.ly/formuliraksessimrsRSAN",
    aosDelay: "300",
  },
];

const Simrs: React.FC = () => {
  return (
    <div className="py-20 text-black dark:text-white justify-items-center">
      <div className="container">
        {/* Header section */}
        <div data-aos="fade-up" className="text-center mb-15">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 dark:text-white mb-2">
                SIMRS RS NMC
            </h1>
            <h2 className="text-md sm:text-lg font-semibold text-emerald-700 dark:text-white mb-2">
                Akses Layanan Digital Rumah Sakit
            </h2>
        </div>

        {/* Simrs card section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:gap-6 place-items-center">
          {SimrsData.map(({ id, img, name, description, link, button, aosDelay }) => (
            <div
                key={id}
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                className="max-w-[300px] min-h-[300px] group rounded-2xl 
                        bg-white dark:bg-gray-800 
                        dark:hover:bg-primary hover:bg-primary 
                        hover:text-white duration-300 shadow-xl"
            >
                <div className="p-4 text-center">
                <img
                    src={img}
                    alt={name}
                    className="max-w-[200px] mx-auto 
                            group-hover:scale-110 group-hover:translate-x-4 
                            duration-300 mb-3"
                />

                <h1 className="text-xl font-bold text-gray-500 group-hover:text-white duration-300 mb-2">
                    {name}
                </h1>

                {/* DESKRIPSI */}
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm mb-4 line-clamp-3">
                    {name === "Absensi" ? (
                    <>
                        Buka Aplikasi Absensi. Tutorial Instalasi bisa diakses melalui tautan berikut:{" "}
                        <a
                        href="https://docs.google.com/document/d/19q66i2Hbg0sBzV6gTeIfDfvW6zydHVQZ/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 hover:underline font-medium"
                        onClick={(e) => e.stopPropagation()}
                        >
                        Tutorial Instalasi
                        </a>
                    </>
                    ) : (
                    description
                    )}
                </p>

                {/* BUTTON */}
                <Link to={`${link}`} className="inline-block">
                    <button
                    className="bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-md rounded-full hover:scale-105 duration-200 cursor-pointer"
                    >
                    {button}
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

export default Simrs;
