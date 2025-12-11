import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { appSetting } from "../../../../appSetting";

interface DoctorDetail {
  id: number;
  nama: string;
  spesialis: string;
  profile: string;
  image: string;
}

interface ScheduleItem {
  hari: string;
  jam_mulai: string;
  jam_selesai: string;
}

interface EducationItem {
  universitas: string;
  prodi : string;
}

const DoctorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // STATE
  const [doctor, setDoctor] = useState<DoctorDetail | null>(null);
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [education, setEducation] = useState<EducationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const resDoctor = await fetch(`${appSetting.apiUrl}/api/getDokterById/${id}`);
        const resSchedule = await fetch(`${appSetting.apiUrl}/api/getScheduleByDokterId/${id}`);
        const resEducation = await fetch(`${appSetting.apiUrl}/api/getEducationByDokterId/${id}`);

        const doctorData = await resDoctor.json();
        const scheduleData = await resSchedule.json();
        const educationData = await resEducation.json();

        setDoctor(doctorData.data);
        setSchedule(scheduleData.data || []);
        setEducation(educationData.data || []);
      } catch (error) {
        console.error("Error fetching detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-500">
        <p>Dokter tidak ditemukan.</p>
      </div>
    );
  }

  // KONVERSI PROFILE HTML → TEXT
  const parseHTML = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || "";
  };

  return (
    <>
      <div className="min-h-[650px] flex justify-center items-center py-12 dark:bg-black dark:text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Image */}
            <div data-aos="zoom-in" className="flex flex-col items-center">
              <img
                src={
                  doctor.image?.startsWith("data:")
                    ? doctor.image
                    : `data:image/jpeg;base64,${doctor.image}`
                }
                alt={doctor.nama}
                className="max-w-[350px] h-auto w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.6)] object-cover"
              />

              <div className="text-center mt-6">
                <h2 className="text-lg font-semibold">{doctor.nama}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {doctor.spesialis}
                </p>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-6 text-justify">

              {/* PROFIL */}
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-green-700 mb-2">PROFIL</h3>
                <p className="text-gray-700 text-sm sm:text-lg dark:text-gray-300 leading-relaxed">
                  {parseHTML(doctor.profile)}
                </p>
              </div>

              {/* PENDIDIKAN */}
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-green-700 mb-2">PENDIDIKAN</h3>

                {education.length === 0 ? (
                  <p className="text-gray-500">Tidak ada data pendidikan.</p>
                ) : (
                  education.map((edu, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300">
                      • {edu.universitas} - {edu.prodi}
                    </p>
                  ))
                )}
              </div>

              {/* JADWAL PRAKTIK */}
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-green-700 mb-4">JADWAL PRAKTIK</h3>

                {schedule.length === 0 ? (
                  <p className="text-gray-500">Tidak ada jadwal.</p>
                ) : (
                  <>
                    <div className="grid grid-cols-5 text-center text-white bg-green-700 rounded-t-md overflow-hidden">
                      {schedule.map((s, idx) => (
                        <div key={idx} className="py-2 text-sm sm:text-sm md:text-base font-semibold">
                          {s.hari}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-5 text-center text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-b-md">
                      {schedule.map((s, idx) => (
                        <div key={idx} className="p-2 text-[10px] sm:text-sm md:text-base">
                          {s.jam_mulai.replace(":00", "")} - {s.jam_selesai.replace(":00", "")}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetailPage;
