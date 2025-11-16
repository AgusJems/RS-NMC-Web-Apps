import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

interface PoliItem {
  id: number;
  nama_poli: string;
  deskripsi: string;
  image: string;
  status: number;
}

const OutPatientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [poli, setPoli] = useState<PoliItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600 });
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/getPoliById/${id}`);
      const json = await res.json();
      setPoli(json.data || null);
    } catch (error) {
      console.error("Error fetching poli detail:", error);
      setPoli(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Loading...
      </div>
    );

  if (!poli)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Poli tidak ditemukan.</p>
      </div>
    );

  return (
    <div className="py-12 mb-10 justify-items-center">
      <div className="container min-h-screen px-4 py-6 dark:bg-black dark:text-white">
        <div className="max-w-4xl mx-auto">

          {/* TITLE */}
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {poli.nama_poli}
          </h1>

          {/* IMAGE */}
          <div
            data-aos="fade-up"
            className="relative w-full h-[350px] mb-6 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={poli.image}
              alt={poli.nama_poli}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* DESCRIPTION */}
          <div
            data-aos="fade-up"
            className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: poli.deskripsi }}
          />

          {/* BUTTON BACK */}
          <div className="mt-10">
            <Link to="/service/outpatient">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                ← Kembali ke Daftar Poli
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OutPatientDetailPage;
