import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import DoctorData from "../../doctorData/doctorData";

const DoctorPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
        <div className="py-10 mb-10 justify-items-center">
            <div className="container min-h-screen px-4 py-6 dark:bg-black dark:text-white">
            <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1 data-aos="fade-up" className="text-2xl font-bold text-center mb-6">
                Dokter Kami
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque reiciendis inventore iste ratione ex alias quis magni at optio.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {DoctorData.map((data) => (
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
            </div>
        </div>
        </div>
    </>
  );
};

export default DoctorPage;
