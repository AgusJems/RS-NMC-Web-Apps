import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  nama_berita: string;
  deskripsi: string;
  image: string;
  tanggal: string;
  jenis_id: number;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

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
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/getAllNews")
      .then((res) => res.json())
      .then((json) => {
        setNews((json.data || []).slice(0, 6));
      })
      .catch(console.error);
  }, []);

  const stripHTML = (html: string) => html.replace(/<[^>]+>/g, "");

  return (
    <div className="py-10 justify-items-center bg-white dark:bg-black text-black dark:text-white">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Our News</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-500 dark:text-white mb-2">
            Berita
          </h1>
          <p data-aos="fade-up" className="text-md text-gray-400">
            Dapatkan informasi terbaru seputar kegiatan, inovasi layanan, serta edukasi kesehatan dari RS An Ni’mah.
          </p>
        </div>

        {/* SLIDER */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {news.map((item) => (
              <div key={item.id} className="my-6 cursor-pointer">
                <Link to={`/newspage/${item.id}`}>
                  <div className="flex flex-col gap-2 shadow-lg py-8 px-3 mx-4 rounded-xl dark:bg-gray-800 relative">
                    <div className="relative w-full h-[153px] rounded-lg overflow-hidden mb-2">
                      <img
                        src={item.image}
                        alt={item.nama_berita}
                        className="object-cover object-top w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <h1 className="text-xl font-bold text-black/80 dark:text-white line-clamp-2">
                          {item.nama_berita}
                        </h1>
                        <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-2">
                          {stripHTML(item.deskripsi).slice(0, 90)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* BUTTON */}
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
