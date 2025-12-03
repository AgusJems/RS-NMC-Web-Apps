import React, { useEffect, useState } from "react";
import Slider from "react-slick";

interface RestoItem {
  id: number;
  title: string;
  deskripsi: string;
  image: string;
  status: number;
  created_at: string;
}

const Resto: React.FC = () => {
  const [resto, setResto] = useState<RestoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResto();
  }, []);

  const fetchResto = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/Resto");
      const json = await res.json();
      setResto(json.data || []);
    } catch (err) {
      console.error("Error fetching resto:", err);
    } finally {
      setLoading(false);
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const sanitizeHtml = (html: string) => {
    return html
      .replace(/background-color:[^;"]+;?/gi, "")
      .replace(/color:[^;"]+;?/gi, "")
      .replace(/style=""/gi, "");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="py-10 justify-items-center dark:bg-black dark:text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[800px] mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6">
            Menu Resto RSU An Ni’mah
          </h1>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {resto.map((item) => (
            <div key={item.id} className="px-4 py-6">
              <div className="max-w-2xl mx-auto">
                {/* Title */}
                <h1
                  data-aos="fade-up"
                  className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center"
                >
                  {item.title}
                </h1>

                {/* IMAGE */}
                <div
                  data-aos="fade-up"
                  className="relative w-full h-full mb-6 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>

                {/* DESCRIPTION */}
                <div
                  data-aos="fade-up"
                  className="news-content prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-300 text-sm sm:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(item.deskripsi),
                  }}
                />

                {/* DATE */}
                <p className="mt-4 text-sm text-gray-400 text-center">
                  Ditambahkan pada:{" "}
                  {new Date(item.created_at).toLocaleDateString("id-ID")}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Resto;
