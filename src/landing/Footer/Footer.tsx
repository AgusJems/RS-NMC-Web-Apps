import React from 'react';
import {
  FaAmbulance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneVolume,
  FaRegEnvelope,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactUs = [
  {
    title: "Kenapa RSU An ni`mah",
    link: "/#",
  },
  {
    title: "Sejarah Rumah Sakit",
    link: "story",
  },
  {
    title: "Visi $ Misi",
    link: "visi-misi",
  },
  {
    title: "Blog",
    link: "/#blog",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
            <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/rsuannimah/">
                  <FaInstagram className="text-3xl cursor-pointer hover:text-pink-700 hover:translate-x-1 duration-300 text-gray-200" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600 hover:translate-x-1 duration-300 text-gray-200" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-400 hover:translate-x-1 duration-300 text-gray-200" />
                </a>
                <a href="#">
                  <FaTiktok className="text-3xl cursor-pointer hover:text-white hover:translate-x-1 duration-300 text-gray-200" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex gap-4">
                  <a href="https://www.google.com/maps/place/RSU+An+Ni'mah/@-7.5180652,109.0596968,17z/data=!3m1!4b1!4m6!3m5!1s0x2e65658e05cf188b:0xda6cc3063704668a!8m2!3d-7.5180652!4d109.0622717!16s%2Fg%2F11b6pwr_9h?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D">
                    <FaLocationArrow className='mt-1.5' />
                  </a>
                  <p className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 200 text-sm sm:text-sm md:text-base">
                    Jl. Raya Wangon-Ci, Klapagading, Kec. Wangon, Kabupaten Banyumas, Jawa Tengah 53176
                  </p>
                </div>
              </div>
            </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8">
              <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3">
                Hubungi Kami
              </h1>
              <div className="flex items-center gap-4 mt-3">
                <FaAmbulance />
                <p className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 text-xs sm:text-sm md:text-base"> Ambulans & Gawat Darurat (0281) 513267</p>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <FaPhoneVolume />
                <p className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 text-xs sm:text-sm md:text-base">Pusat Panggilan (0281) 513267</p>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <FaWhatsapp />
                <p className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 text-xs sm:text-sm md:text-base">Whatshapp (0281) 513267</p>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <FaRegEnvelope />
                <p className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 text-xs sm:text-sm md:text-base">rsu.annimah@gmail.com</p>
              </div>
            </div>

            <div className="py-8">
              <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3 ml-10 sm:ml-20">
                Layanan
              </h1>
              <ul className="flex flex-col gap-3">
                {Service.map((item) => (
                  <li
                    key={item.title}
                    className="ml-10 sm:ml-20"
                  >
                    <Link
                      to={`/service/${item.link}`}
                      className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 text-xs sm:text-sm md:text-base"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="py-8">
              <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3 ml-10 sm:ml-20">
                Layanan
              </h1>
              <ul className="flex flex-col gap-3">
                {ContactUs.map((item) => (
                  <li
                    key={item.title}
                    className="ml-10 sm:ml-20"
                  >
                    <Link
                      to={`/profile/${item.link}`}
                      className="cursor-pointer hover:text-yellow-400 hover:translate-x-1 duration-300 text-gray-200 text-xs sm:text-sm md:text-base"
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
          Copyright @2025, agus | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
