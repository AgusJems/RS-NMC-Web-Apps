import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { appSetting } from "../../../../appSetting";

interface IndicatorItem {
  id: number;
  title: string;
  image: string | null;
  status: number;
}

const QualityIndicatorPage: React.FC = () => {
  const [data, setData] = useState<IndicatorItem[]>([]);

  useEffect(() => {
    fetch(`${appSetting.apiUrl}/api/indicator`)
      .then((res) => res.json())
      .then((res) => setData(res.data || []))
      .catch(console.error);
  }, []);

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
          slidesToShow: 2,
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
    <div className="py-10 justify-items-center dark:bg-black dark:text-white">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-10 max-w-[800px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-xl sm:text-2xl font-bold text-center mb-6"
          >
            Capaian Indikator Nasional Mutu (INM) <br />
            Rumah Sakit Umum An ni`mah
          </h1>
        </div>

        {/* SLIDER */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {data
              .filter((item) => item.status === 1)
              .map((item) => (
                <div key={item.id} className="my-6 cursor-pointer">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 relative">

                    {/* IMAGE */}
                    <div className="relative w-full h-[250px] sm:h-[400px] rounded-lg overflow-hidden mb-2">
                      <img
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.title}
                        className="w-full h-full"
                      />
                    </div>

                    {/* TITLE */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <h1 className="text-md sm:text-xl font-bold text-black/80 dark:text-white">
                          {item.title}
                        </h1>
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

export default QualityIndicatorPage;
