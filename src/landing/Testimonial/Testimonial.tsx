import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Agus",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/user/owner.png",
  },
  {
    id: 2,
    name: "Agus",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/user/owner.png",
  },
  {
    id: 3,
    name: "Agus",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/user/owner.png",
  },
  {
    id: 4,
    name: "Agus",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/user/owner.png",
  },
  {
    id: 5,
    name: "Agus",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "/images/user/owner.png",
  },
];

const Testimonial: React.FC = () => {
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
          slidesToShow: 3,
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
            What our patient are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-500 dark:text-white mb-4">
            Testimonial by Pasien
          </h1>
          <p data-aos="fade-up" className="text-md text-gray-400">
            Ulasan dan pengalaman nyata dari pasien yang telah merasakan pelayanan RS An Ni’mah. Komitmen kami adalah memberikan perawatan terbaik dengan sentuhan kepedulian.
          </p>
        </div>

        <div className="flex justify-center md:justify-end mb-4">
          <Link to="/testimoni">
            <button
              data-aos="fade-up"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200"
            >
              Tambah Testimoni
            </button>
          </Link>
        </div>


        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
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
