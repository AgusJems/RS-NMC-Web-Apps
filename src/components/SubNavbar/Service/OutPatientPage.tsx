import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface OutPatientItem {
  id: number;
  name: string;
  text: string;
  img: string;
}

const OutPatientData: OutPatientItem[] = [
  {
    id: 1,
    name: "Poli Anak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 2,
    name: "Poli Bedah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 3,
    name: "Poli Bedah Anak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 4,
    name: "Poli Dalam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 5,
    name: "Poli Jantung",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 6,
    name: "Poli Jiwa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 7,
    name: "Poli Mata",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 8,
    name: "Poli Obgyn",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 9,
    name: "Poli Orthopedi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
  {
    id: 10,
    name: "Poli Paru",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/berita.png",
  },
];

const OutPatientPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
     <div className="py-10 mb-10 justify-items-center">
        <div className="container min-h-screen px-4 py-6 dark:bg-black dark:text-white">
        <div className="text-center mb-10 max-w-[800px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-2xl font-bold text-center mb-6"
          >
            Pelayanan Rawat Jalan
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at optio
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="zoom-in"
        >
          {OutPatientData.map((data) => (
            <div key={data.id} className="cursor-pointer">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-3 rounded-xl dark:bg-gray-800">
                <div className="w-full h-[153px] rounded-lg overflow-hidden mb-2">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold text-black/80 dark:text-white">
                    {data.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2 mb-3">
                    {data.text}
                  </p>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                    Read More
                  </button>
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
