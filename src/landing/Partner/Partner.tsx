import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

interface PartnerItem {
  id: number;
  image: string;
}

const Partner: React.FC = () => {
  const [partners, setPartners] = useState<PartnerItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/patner")
      .then((res) => res.json())
      .then((res) => setPartners(res.data || []))
      .catch(() => console.log("Failed to load partners"));
  }, []);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-emerald-50 dark:bg-gray-dark dark:text-white p-8">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Our Partner</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-500 dark:text-white">
            Partner & Friend
          </h1>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {partners.map((item) => (
            <div key={item.id}>
              <div className="flex justify-center items-center py-4">
                <img
                  src={item.image}
                  alt={`partner-${item.id}`}
                  className="h-16 w-auto object-contain hover:scale-105 duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default Partner;
