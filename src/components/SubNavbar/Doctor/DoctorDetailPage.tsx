import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import DoctorData from "../../doctorData/doctorData";

const DoctorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = DoctorData.find((item) => item.id === Number(id));

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-500">
        <p>Dokter tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-[650px] flex justify-center items-center py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Image Section */}
            <div data-aos="zoom-in" className="flex flex-col items-center">
              <img
                src={doctor.img}
                alt={doctor.name}
                className="max-w-[350px] h-auto w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.6)] object-cover"
              />
              <div className="text-center mt-6">
                <h2 className="text-lg font-semibold">{doctor.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {doctor.specialist}
                </p>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-6 text-justify">
              {/* Profil */}
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-green-700 mb-2">PROFIL</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {doctor.profile}
                </p>
              </div>

              {/* Pendidikan */}
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-green-700 mb-2">PENDIDIKAN</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {doctor.education}
                </p>
              </div>

              {/* Pengalaman */}
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-green-700 mb-2">PENGALAMAN</h3>
                {doctor.experience.map((exp, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300">
                    {exp}
                  </p>
                ))}
              </div>

              {/* Jadwal Praktik */}
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-green-700 mb-4">JADWAL PRAKTIK</h3>
                <div className="grid grid-cols-5 text-center text-white bg-green-700 rounded-t-md overflow-hidden">
                  {Object.keys(doctor.schedule).map((day, idx) => (
                    <div key={idx} className="py-2 font-semibold">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 text-center text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-b-md">
                  {Object.values(doctor.schedule).map((time, idx) => (
                    <div key={idx} className="py-2">
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetailPage;
