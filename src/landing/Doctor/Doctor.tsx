import React from "react";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import type { DoctorList } from "../../components/doctorData/doctorData";

interface DoctorProps {
  doctors: DoctorList[];
}

const Doctor: React.FC<DoctorProps> = ({ doctors }) => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } } // MOBILE: 1 doctor
    ],
  };

  return (
    <div className="py-12 sm:py-0">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Our Doctor</p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-gray-500 dark:text-white mb-4"
          >
            Dokter Kami
          </h1>
          <p data-aos="fade-up" className="text-md text-gray-400">
            Dukung kesehatan Anda bersama dokter-dokter terbaik kami yang siap memberikan pelayanan profesional dan penuh dedikasi.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {doctors.slice(0, 10).map((doctor) => (
            <div key={doctor.id} className="px-2">
              <div
                data-aos="zoom-in"
                className="space-y-3 flex flex-col items-center"
              >
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="h-[220px] w-[200px] object-cover rounded-md"
                />
                <div className="text-center">
                  <h3 className="font-semibold">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialist}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View All */}
        <div className="flex justify-center mt-10">
          <Link to="/doctorpage">
            <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
              View All Doctor
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Doctor;
