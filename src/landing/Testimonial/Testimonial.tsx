import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface Testimoni {
  id: number;
  nama: string;
  alamat: string;
  deskripsi: string;
  rating: number;
  status: number;
}

const Testimonial: React.FC = () => {
  const [testimoni, setTestimoni] = useState<Testimoni[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/getAllTestimoni")
      .then((res) => res.json())
      .then((res) => {
        const activeData = (res.data || []).filter(
          (item: Testimoni) => item.status === 1
        );
        setTestimoni(activeData);
      })
      .catch(() => console.log("Failed fetch testimonials"));
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
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

  return (
    <div className="py-10 mb-10 justify-items-center">
      <div className="container">
        {/* header section */}
        <div className="text-center px-4 mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our patients are saying
          </p>
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-bold text-gray-500 dark:text-white mb-4"
          >
            Testimonial by Pasien
          </h1>
          <p data-aos="fade-up" className="text-sm sm:text-md text-gray-400">
            Ulasan dan pengalaman nyata dari pasien yang telah merasakan
            pelayanan RS An Ni’mah. Komitmen kami adalah memberikan perawatan
            terbaik dengan sentuhan kepedulian.
          </p>
        </div>

        {/* Tombol tambah testimoni */}
        <div className="flex justify-center md:justify-end mb-4">
          <Link to="/testimoni">
            <button
              data-aos="fade-up"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200"
            >
              "Klik untuk Menilai"
            </button>
          </Link>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimoni.map((item) => (
              <div key={item.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  {/* Nama */}
                  <div className="flex justify-center">
                    <h1 className="text-xl font-bold text-black/80 dark:text-white">
                      {item.nama}
                    </h1>
                  </div>

                  {/* Isi Testimoni */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-2 text-center">
                      <p className="text-sm text-gray-500">{item.alamat}</p>

                      <div
                        className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: item.deskripsi }}
                      />

                      <p className="text-yellow-500 text-lg">
                        {"⭐".repeat(item.rating)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
