import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import bgRs from "../../../public/images/carousel/rs-depan.svg";

const bgStyle: React.CSSProperties = {
  backgroundImage: `url(${bgRs})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "750px",
  width: "100vw",
};

type ImageItem = {
  id: number;
  image: string;
  title: string;
  deskripsi: string;
};

interface CarouselProps {
  handleOrderPopup: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ handleOrderPopup }) => {
  const [carouselData, setCarouselData] = useState<ImageItem[]>([]);

  // Ambil data dari backend
  useEffect(() => {
    fetch("http://localhost:3001/api/getActiveCarousel")
      .then((res) => res.json())
      .then((res) => setCarouselData(res.data || []))
      .catch((err) => console.error("Error load carousel:", err));
  }, []);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div style={bgStyle}>
      <div className="dark:bg-dark/60 bg-white/10 backdrop-blur-sm dark:text-white duration-300 h-[750px] flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {carouselData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  
                  {/* Text */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-700"
                    >
                      {data.title}
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay={100}
                      className="text-lg text-white"
                      dangerouslySetInnerHTML={{ __html: data.deskripsi }}
                    />

                    {/* <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay={300}
                    >
                      <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      >
                        Read More
                      </button>
                    </div> */}
                  </div>

                  {/* Image */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.image}
                        alt={data.title}
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[400px] sm:scale-105 lg:scale-120 object-contain mx-auto rounded-xl"
                      />
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

export default Carousel;
