import React from "react";
import Slider from "react-slick";

interface StoryItem {
  id: number;
  name: string;
  img: string;
}

const StoryData: StoryItem[] = [
  {
    id: 1,
    name: "Kepatuhan Kebersihan Tangan",
    img: "/images/quality/1.png",
  },
  {
    id: 2,
    name: "Kepatuhan Alat Pelindung Diri (APD)",
    img: "/images/quality/2.png",
  },
  {
    id: 3,
    name: "Kepatuhan Identifikasi Pasien",
    img: "/images/quality/3.png",
  },
  {
    id: 4,
    name: "Waktu Tanggap Operasi Seksio Sesarea Emergensi",
    img: "/images/quality/4.png",
  },
  {
    id: 5,
    name: "Waktu Tunggu Rawat Jalan",
    img: "/images/quality/5.png",
  },
  {
    id: 6,
    name: "Penundaan Operasi Elektif",
    img: "/images/quality/6.png",
  },
  {
    id: 7,
    name: "Kepatuhan Waktu Visit Dokter",
    img: "/images/quality/7.png",
  },
  {
    id: 8,
    name: "Pelapoaran Hasil Kritis Laboratorium",
    img: "/images/quality/8.png",
  },
  {
    id: 9,
    name: "Kepatuhan Penggunaan Formularium Nasional",
    img: "/images/quality/9.png",
  },
  {
    id: 10,
    name: "Kepatuhan Terhadap Alur Klinis (Clinical Pathway)",
    img: "/images/quality/10.png",
  },
  {
    id: 11,
    name: "Kepatuhan Upaya Pencegahan Risiko Pasien Jatuh",
    img: "/images/quality/11.png",
  },
  {
    id: 12,
    name: "Kecepatan Waktu Tanggap Komplain",
    img: "/images/quality/12.png",
  },
  {
    id: 13,
    name: "Kepuasan Pasien",
    img: "/images/quality/13.png",
  },
];

const QualityIndicatorPage: React.FC = () => {
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
        {/* header section */}
        <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl font-bold text-center mb-6"
            >
              Capaian Indikator Nasional Mutu (INM) <br></br> Rumah Sakit Umum An ni`mah
            </h1>
          </div>

        {/* News cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {StoryData.map((data: StoryItem) => (
              <div key={data.id} className="my-6 cursor-pointer">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 relative">
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-2">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
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
