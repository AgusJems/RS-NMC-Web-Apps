import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

interface PoliItem {
  id: number;
  nama_poli: string;
  deskripsi: string;
  image: string;
  status: number;
}

const OutPatientPage: React.FC = () => {
  const [poliData, setPoliData] = useState<PoliItem[]>([]);

  useEffect(() => {
    AOS.init({ duration: 600 });
    fetchPoli();
  }, []);

  const fetchPoli = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/getActivePoli");
      const json = await res.json();
      setPoliData(json.data || []);
    } catch (error) {
      console.error("Error fetching poli:", error);
    }
  };

  return (
    <>
      <div className="py-10 mb-10 justify-items-center">
        <div className="container min-h-screen px-4 py-6 dark:bg-black dark:text-white">

          {/* Header */}
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold mb-6">
              Pelayanan Rawat Jalan
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
              Layanan rawat jalan RSU An Ni’mah tersedia untuk berbagai kebutuhan medis,
              ditangani oleh dokter spesialis berpengalaman.
            </p>
          </div>

          {/* Grid Poli */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="zoom-in"
          >
            {poliData.map((data) => (
              <div key={data.id} className="cursor-pointer">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-3 rounded-xl dark:bg-gray-800">

                  {/* Image */}
                  <div className="w-full h-[153px] rounded-lg overflow-hidden mb-2">
                    <img
                      src={data.image || "/images/placeholder.png"}
                      alt={data.nama_poli}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-black/80 dark:text-white">
                      {data.nama_poli}
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2 mb-3">
                      {data.deskripsi.replace(/<[^>]+>/g, "").slice(0, 100)}...
                    </p>

                    <Link to={`/service/outpatient/${data.id}`}>
                      <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                        Read More
                      </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default OutPatientPage;
