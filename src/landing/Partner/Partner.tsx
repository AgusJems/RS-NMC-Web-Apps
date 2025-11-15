import React from "react";
import Slider, { Settings } from "react-slick";

const PartnerData = [
  { id: 1, img: "/images/partner/patner-1.png" },
  { id: 2, img: "/images/partner/patner-2.png" },
  { id: 3, img: "/images/partner/patner-3.png" },
  { id: 4, img: "/images/partner/patner-4.png" },
  { id: 5, img: "/images/partner/patner-5.png" },
  { id: 6, img: "/images/partner/patner-1.png" },
  { id: 7, img: "/images/partner/patner-2.png" },
  { id: 8, img: "/images/partner/patner-3.png" },
  { id: 9, img: "/images/partner/patner-4.png" },
  { id: 10, img: "/images/partner/patner-5.png" },
];

const Partner: React.FC = () => {
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
    <div className="bg-emerald-50 dark:bg-gray-dark dark:text-white p-8 mb-12">
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
          {PartnerData.map((data) => (
            <div key={data.id}>
              <div className="flex justify-center items-center py-4">
                <img
                  src={data.img}
                  alt={`partner-${data.id}`}
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