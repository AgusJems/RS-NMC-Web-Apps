import React from "react";
import Image1 from "../../../public/images/user/owner.png";
import bgRs from "../../../public/images/carousel/rs-depan.svg";
import Slider, { Settings } from "react-slick";

const bgStyle: React.CSSProperties = {
  backgroundImage: `url(${bgRs})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "650px",
  width: "100vw",
};

type ImageItem = {
  id: number;
  img: string;
  title: string;
  description: string;
};

const ImageList: ImageItem[] = [
  {
    id: 1,
    img: Image1,
    title: "RS Anni'mah Healthcare Center",
    description:
      "Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).",
  },
  {
    id: 2,
    img: Image1,
    title: "RS Anni'mah Emergency Care",
    description:
      "Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).",
  },
  {
    id: 3,
    img: Image1,
    title: "RS Anni'mah Healthcare Outpatient",
    description:
      "Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).",
  },
];

interface CarouselProps {
  handleOrderPopup: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ handleOrderPopup }) => {
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
      <div className="dark:bg-dark/60 bg-white/60 backdrop-blur-sm dark:text-white duration-300 h-[650px] flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay={100}
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
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
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
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
