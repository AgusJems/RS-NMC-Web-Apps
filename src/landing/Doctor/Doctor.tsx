import React from "react";
import { Link } from "react-router-dom";
import type { DoctorList } from "../../components/doctorData/doctorData";

interface DoctorProps {
  doctors: DoctorList[];
}

const Doctor: React.FC<DoctorProps> = ({ doctors }) => {
  return (
    <div className="min-h-[550px] py-12 sm:py-0 justify-items-center">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Our Doctor
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-500 dark:text-white mb-4">
            Dokter Kami
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Grid Card - hanya tampilkan 5 doctor */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {doctors.slice(0, 5).map((doctor) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={doctor.id}
              className="space-y-3 place-items-center"
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
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center">
          <Link to="/doctorpage">
            <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200 mt-10">
              View All Doctor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
