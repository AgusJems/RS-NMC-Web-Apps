import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { appSetting } from "../../../../appSetting";

interface DoctorItem {
  id: number;
  nama: string;
  spesialis: string;
  image: string | null;
}

const DoctorPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState<DoctorItem[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<DoctorItem[]>([]);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  // Fetch doctor from backend
  useEffect(() => {
    fetch(`${appSetting.apiUrl}/api/getAllDokter`)
      .then((res) => res.json())
      .then((json) => {
        setDoctors(json.data || []);
        setFilteredDoctors(json.data || []);
      })
      .catch((err) => console.error("Error fetching doctor:", err));
  }, []);

  // Handle image source (base64 / null)
  const getImageSrc = (img: string | null) => {
    if (!img) return "/default-doctor.png";
    return img.startsWith("data:")
      ? img
      : `data:image/jpeg;base64,${img}`;
  };

  // Filter
  useEffect(() => {
    const filtered = doctors.filter(
      (doc) =>
        doc.nama.toLowerCase().includes(search.toLowerCase()) ||
        doc.spesialis.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [search, doctors]);

  return (
    <>
      <div className="py-10 justify-items-center dark:bg-black dark:text-white">
        <div className="container min-h-screen px-4">

          {/* Header */}
          <div className="text-center mb-10 max-w-[700px] mx-auto">
            <h1 data-aos="fade-up" className="text-xl sm:text-2xl font-bold mb-6">
              Cari Jadwal Dokter di RSU An Ni’mah
            </h1>

            <p data-aos="fade-up" className="text-sm sm:text-md text-gray-400 mb-4">
              Jadwal dokter RSU An Ni’mah kini dapat diakses secara mudah.
              Pilih dokter sesuai kebutuhan Anda dan temukan waktu praktik terbaik.
            </p>

            <div data-aos="fade-up" className="flex justify-center">
              <input
                type="text"
                placeholder="Cari nama dokter Anda disini..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-96 px-4 py-2 border rounded-full dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {filteredDoctors.map((data) => (
              <div
                data-aos="zoom-in"
                key={data.id}
                className="space-y-3 place-items-center"
              >
                <img
                  src={getImageSrc(data.image)}
                  alt={data.nama}
                  className="h-[220px] w-[200px] object-cover rounded-md drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.6)]"
                />

                <div className="text-center">
                  <h3 className="font-semibold">{data.nama}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {data.spesialis}
                  </p>

                  {/* Button menuju detail schedule */}
                  <Link to={`/doctorpage/${data.id}`}>
                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-md rounded-full hover:scale-105 duration-200 cursor-pointer">
                      View Schedule
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {filteredDoctors.length === 0 && (
              <p className="col-span-full text-gray-500">
                Tidak ada dokter ditemukan.
              </p>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default DoctorPage;
