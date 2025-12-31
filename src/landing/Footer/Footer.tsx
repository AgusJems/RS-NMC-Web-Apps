import React from 'react';
import {
  FaAmbulance,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhoneVolume,
  FaRegEnvelope,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactUs = [
  {
    title: "Sejarah Rumah Sakit",
    link: "story",
  },
  {
    title: "Visi & Misi",
    link: "visi-misi",
  },
];

const Service = [
  {
    title: "Rawat Jalan",
    link: "outpatient",
  },
  {
    title: "Rawat Inap",
    link: "inpatient",
  },
  {
    title: "Rawat Darurat",
    link: "emergency-care",
  },
  {
    title: "Penunjang",
    link: "support",
  },
];

const Footer: React.FC = () => {
  const message = "Halo admin, saya ingin bertanya mengenai layanan.";
  const waAmbulanceUrl = `https://wa.me/628112666841?text=${encodeURIComponent(message)}`;
  const waCallCenterUrl = `https://wa.me/628112922444?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-black text-white justify-items-center">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src="/images/logo/logo-white.svg"
                alt="Logo"
                className="max-w-[150px]"
              />
            </h1>
            <p className='text-gray-200'>
              Melayani Penuh Kasih Sayang.
            </p>
            <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/rsuannimah/">
                  <FaInstagram className="text-3xl cursor-pointer hover:text-pink-700 hover:translate-x-1 duration-300 text-gray-200" />
                </a>
                <a href="https://www.facebook.com/share/1GdHsE5K4m/">
                  <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300 text-gray-200" />
                </a>
                <a href="https://youtube.com/@rsuannimah?si=elvP_lleyzUQeOSs">
                  <FaYoutube className="text-3xl cursor-pointer hover:text-red-500 hover:translate-x-1 duration-300 text-gray-200" />
                </a>
                <a href="https://www.tiktok.com/@rsuannimah?_t=ZS-90ut6qt1EG8&_r=1">
                  <FaTiktok className="text-3xl cursor-pointer hover:text-white hover:translate-x-1 duration-300 text-gray-200" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex gap-4">
                  <a href="https://www.google.com/maps/place/RSU+An+Ni'mah/@-7.5180652,109.0596968,17z/data=!3m1!4b1!4m6!3m5!1s0x2e65658e05cf188b:0xda6cc3063704668a!8m2!3d-7.5180652!4d109.0622717!16s%2Fg%2F11b6pwr_9h?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D">
                    <FaLocationArrow className='mt-1.5' />
                  </a>
                  <a href="https://www.google.com/maps/place/RSU+An+Ni'mah/@-7.5180652,109.0596968,17z/data=!3m1!4b1!4m6!3m5!1s0x2e65658e05cf188b:0xda6cc3063704668a!8m2!3d-7.5180652!4d109.0622717!16s%2Fg%2F11b6pwr_9h?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                   className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 200 text-sm sm:text-sm md:text-base">
                    Jl. Raya Wangon-Ci, Klapagading, Kec. Wangon, Kabupaten Banyumas, Jawa Tengah 53176
                  </a>
                </div>
              </div>
            </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-2 md:pl-10 gap-10 py-8">

            {/* Hubungi Kami */}
            <div className="py-2 px-4">
              <h1 className="sm:text-xl text-lg font-bold mb-3">Hubungi Kami</h1>

              <div className="flex items-center gap-4 mt-3">
                <FaAmbulance />
                <a href={waAmbulanceUrl} className="cursor-pointer hover:text-yellow-400 duration-300 text-gray-200 text-sm">
                  Instalasi Gawat Darurat (IGD)
                </a>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <FaPhoneVolume />
                <a href={waCallCenterUrl} className="cursor-pointer hover:text-yellow-400 duration-300 text-gray-200 text-sm">
                  Pusat Panggilan
                </a>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <FaWhatsapp />
                <a href={waCallCenterUrl} className="cursor-pointer hover:text-yellow-400 duration-300 text-gray-200 text-sm">
                  Whatsapp (0811 2922 444)
                </a>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <FaRegEnvelope />
                <p className="cursor-pointer hover:text-yellow-400 duration-300 text-gray-200 text-sm">
                  annimah_hospital@yahoo.com
                </p>
              </div>
            </div>

            {/* Layanan */}
            <div className="py-2 px-4">
              <h1 className="sm:text-xl text-lg font-bold mb-3">Layanan</h1>

              <ul className="flex flex-col gap-3">
                {Service.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={`/service/${item.link}`}
                      className="cursor-pointer hover:text-yellow-400 duration-300 text-gray-200 text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tentang Kami */}
            <div className="py-2 px-4">
              <h1 className="sm:text-xl text-lg font-bold mb-3">Tentang Kami</h1>

              <ul className="flex flex-col gap-3">
                {ContactUs.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={`/profile/${item.link}`}
                      className="cursor-pointer hover:text-yellow-400 duration-300 text-gray-200 text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom text */}
        <div className="text-center py-10 border-t-2 border-gray-300/50 text-white">
          <div className="text-lg font-semibold mb-1">
            Rumah Sakit Umum AN NI`MAH
          </div>

          <div className="text-[8px] sm:text-xs opacity-80">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/agus-safrudin-b11a8b37b/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-300 transition"
            >
              agus
            </a>{" "}
            ©2026 | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
