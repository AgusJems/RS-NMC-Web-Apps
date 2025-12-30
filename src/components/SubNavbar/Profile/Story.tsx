import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { appSetting } from "../../../../appSetting";

interface StoryItem {
  id: number;
  title: string;
  deskripsi: string;
  image: string | null;
  status: number;
}

const StoryPage: React.FC = () => {
  const [data, setData] = useState<StoryItem[]>([]);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  useEffect(() => {
    fetch(`${appSetting.apiUrl}/api/story`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="py-10 dark:bg-black dark:text-white justify-items-center">
        <div className="container min-h-screen px-4">
          
          {/* HEADER */}
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1
              data-aos="fade-up"
              className="text-xl sm:text-2xl font-bold text-center mb-6"
            >
              Perjalanan Sejarah RSU Anni&apos;mah
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
              Dalam perjalanan panjangnya, RSU Anni’mah telah menjadi saksi
              tumbuhnya pelayanan kesehatan yang berpihak pada rakyat. Dari
              fasilitas sederhana hingga menjadi pusat pelayanan unggulan,
              sejarah kami adalah kisah dedikasi dan perubahan.
            </p>
          </div>

          {/* GRID */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            data-aos="zoom-in"
          >
            {data
              .filter((item) => item.status === 1)
              .map((item) => (
                <div key={item.id} className="cursor-pointer">
                  <div className="flex flex-col gap-4 shadow-lg py-6 px-4 rounded-xl dark:bg-gray-800">
                    
                    {/* IMAGE */}
                    <div className="relative w-full h-[250px] sm:h-[450px] rounded-lg overflow-hidden mb-2">
                      <img
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col gap-2">

                      {/* TITLE + TOOLTIP */}
                      <div className="relative group/title">
                        <h1 className="text-lg font-semibold text-black/80 dark:text-white line-clamp-2">
                          {item.title}
                        </h1>

                        <div
                          className="pointer-events-none absolute z-30 hidden group-hover/title:block
                                     bg-black text-white text-xs rounded-md
                                     px-3 py-2 max-w-sm shadow-lg
                                     -top-2 left-0 translate-y-[-100%]"
                        >
                          {item.title}
                        </div>
                      </div>

                      {/* DESKRIPSI + TOOLTIP */}
                      <div className="relative group/desc mb-3">
                        <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-0 sm:line-clamp-4" dangerouslySetInnerHTML={{ __html: item.deskripsi }}/>

                        <div
                          className="pointer-events-none absolute z-30 hidden group-hover/desc:block
                                     bg-black text-white text-xs rounded-md
                                     px-3 py-2 max-w-sm shadow-lg
                                     -top-2 left-0 translate-y-[-100%]"
                         dangerouslySetInnerHTML={{ __html: item.deskripsi }} />
                      </div>

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

export default StoryPage;
