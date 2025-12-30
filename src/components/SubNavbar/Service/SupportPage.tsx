import React, { useEffect, useState } from "react";
import { appSetting } from "../../../../appSetting";

interface SupportItem {
  id: number;
  image: string;
  nama: string;
  deskripsi: string;
  status: number;
}

const SupportPage: React.FC = () => {
  const [data, setData] = useState<SupportItem[]>([]);

  useEffect(() => {
    fetch(`${appSetting.apiUrl}/api/support`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="py-5 sm:py-10 dark:bg-black dark:text-white justify-items-center">
        <div className="min-h-[750px] flex justify-center items-center py-0">
          <div className="container px-4">

            {/* HEADER */}
            <div className="text-center max-w-[800px] mx-auto">
              <h1 data-aos="fade-up" className="text-xl sm:text-2xl font-bold text-center mb-6">
                Layanan Penunjang Rumah Sakit
              </h1>
              <p data-aos="fade-up" className="text-sm">
                Informasi layanan penunjang seperti laboratorium, radiologi, farmasi, 
                dan fasilitas alat kesehatan pendukung di Rumah Sakit Umum AN NI`MAH.
              </p>
            </div>

            {/* LOOP DATA */}
            {data
              .filter((item) => item.status === 1) // hanya tampilkan yang aktif
              .map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-4 sm:py-12"
                >
                  {/* IMAGE */}
                  <div data-aos="zoom-in">
                    <img
                      src={item.image}
                      alt={item.nama}
                      className="max-w-[600px] h-[300px] sm:h-[400px] w-full mx-auto 
                                drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] 
                                object-cover rounded-lg"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 data-aos="fade-up" className="text-xl sm:text-3xl font-bold">
                      {item.nama}
                    </h1>

                    <div
                      data-aos="fade-up"
                      className="text-sm sm:text-md text-gray-500 tracking-wide leading-5 mb-4"
                      dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
