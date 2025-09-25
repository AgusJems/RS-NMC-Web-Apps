import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import NewsData from "../../newsData/newsData";

const NewsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
        <div className="py-10 mb-10 justify-items-center">
            <div className="container min-h-screen px-4 py-6 dark:bg-black dark:text-white">
                <div className="text-center mb-10 max-w-[800px] mx-auto">
                <h1 data-aos="fade-up" className="text-2xl font-bold text-center mb-6">
                    Berita
                </h1>
                <p data-aos="fade-up" className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eaque reiciendis inventore iste ratione ex alias quis magni at optio
                </p>
                </div>

                <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                data-aos="zoom-in"
                >
                {NewsData.map((data) => (
                    <div key={data.id} className="cursor-pointer">
                    <div className="flex flex-col gap-4 shadow-lg py-8 px-4 rounded-xl dark:bg-gray-800">
                        <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-2">
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
                        <Link className="text-center" to={`/newspage/${data.id}`}>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200 cursor-pointer">
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

export default NewsPage;
