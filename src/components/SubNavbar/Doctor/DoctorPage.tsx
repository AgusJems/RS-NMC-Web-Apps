import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import DoctorData from "../../doctorData/doctorData";

const DoctorPage: React.FC = () => {
    const [search, setSearch] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState(DoctorData);

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    useEffect(() => {
    const filtered = DoctorData.filter(
      (doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.specialist.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [search]);

  return (
    <>
        <div className="py-10 mb-10 justify-items-center">
            <div className="container min-h-screen px-4 py-6 dark:bg-black dark:text-white">
                <div className="text-center mb-10 max-w-[700px] mx-auto">
                    <h1 data-aos="fade-up" className="text-2xl font-bold text-center mb-6">
                        Cari Jadwal Dokter di RSU Anni`mah
                    </h1>
                    <p data-aos="fade-up" className="text-md text-gray-400 mb-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {filteredDoctors.map((data) => (
                <div
                data-aos="zoom-in"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 place-items-center"
                >
                <img
                    src={data.img}
                    alt={data.name}
                    className="h-[220px] w-[200px] object-cover rounded-md"
                />
                <div className="text-center">
                    <h3 className="font-semibold">{data.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{data.specialist}</p>
                    <Link to={`/doctorpage/${data.id}`}>
                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200 cursor-pointer">
                        View Schedule
                    </button>
                    </Link>
                </div>
                </div>
            ))}
            {filteredDoctors.length === 0 && (
              <p className="col-span-full text-gray-500">Tidak ada dokter ditemukan.</p>
            )}
            </div>
        </div>
        </div>
    </>
  );
};

export default DoctorPage;
