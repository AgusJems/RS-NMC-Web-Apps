// src/landing/News/News.tsx
import React from "react";
import Slider from "react-slick";
import NewsData from "../../components/newsData/NewsData";
import type { NewsItem } from "../../components/newsData/NewsData";

const News: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 justify-items-center">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Our News
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-500 dark:text-white mb-2">
            Berita
          </h1>
          <p data-aos="fade-up" className="text-md text-gray-400">
            Dapatkan informasi terbaru seputar kegiatan, inovasi layanan, serta edukasi kesehatan dari RS An Ni’mah untuk mendukung hidup sehat Anda dan keluarga.
          </p>
        </div>

        {/* News cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {NewsData.map((data: NewsItem) => (
              <div key={data.id} className="my-6 cursor-pointer">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 relative">
                  <div className="relative w-full h-[153px] rounded-lg overflow-hidden mb-2">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                      <p className="text-xs text-gray-500">{data.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <a href="/newspage" className="text-center">
            <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200 mt-10">
              View All News
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
