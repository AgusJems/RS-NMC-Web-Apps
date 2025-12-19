import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { appSetting } from "../../../../appSetting";

interface PoliItem {
  id: number;
  nama_poli: string;
  deskripsi: string;
  image: string;
  status: number;
}

interface DokterItem {
  id: number;
  nama: string;
  spesialis: string;
  image: string;
}

const OutPatientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [poli, setPoli] = useState<PoliItem | null>(null);
  const [dokterList, setDokterList] = useState<DokterItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600 });
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      const res = await fetch(`${appSetting.apiUrl}/api/getPoliById/${id}`);
      const json = await res.json();
      setPoli(json.data || null);

      if (json.data?.id) {
        fetchDokter(json.data.id);
      }
    } catch (error) {
      console.error("Error fetching poli detail:", error);
      setPoli(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchDokter = async (poliId: number) => {
    try {
      const res = await fetch(
        `${appSetting.apiUrl}/api/getDokterByPoliId/${poliId}`
      );
      const json = await res.json();
      setDokterList(json.data || []);
    } catch (error) {
      console.error("Error fetching dokter:", error);
      setDokterList([]);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
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
    <div className="py-12 dark:bg-black dark:text-white justify-items-center">
      <div className="container min-h-screen px-4">
        <div className="max-w-4xl mx-auto">
          {/* TITLE */}
          <h1
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {poli.nama_poli}
          </h1>

          {/* IMAGE */}
          <div
            data-aos="fade-up"
            className="relative w-full h-[250px] sm:h-[350px] mb-6 rounded-lg overflow-hidden shadow-lg"
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

          {/* LIST DOKTER */}
          {/* LIST DOKTER */}
          {dokterList.length > 0 && (
            <div className="mt-12">
              <h2
                data-aos="fade-up"
                className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 dark:text-white"
              >
                Dokter yang Melayani
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {dokterList.map((doctor) => (
                  <div
                    key={doctor.id}
                    data-aos="zoom-in"
                    className="flex flex-col items-center"
                  >
                    <img
                      src={
                        doctor.image?.startsWith("data:")
                          ? doctor.image
                          : `data:image/jpeg;base64,${doctor.image}`
                      }
                      alt={doctor.nama}
                      className="h-[220px] w-[200px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.6)] object-cover"
                    />

                    <div className="text-center mt-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {doctor.nama}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {doctor.spesialis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BUTTON BACK */}
          <div className="mt-12">
            <Link to="/service/outpatient">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-md rounded-full hover:scale-105 duration-200 cursor-pointer">
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
