import React from "react";

const PatnerData = [
  { id: 1, img: "/images/partner/patner-1.png", aosDelay: "200" },
  { id: 2, img: "/images/partner/patner-2.png", aosDelay: "200" },
  { id: 3, img: "/images/partner/patner-3.png", aosDelay: "200" },
  { id: 4, img: "/images/partner/patner-4.png", aosDelay: "200" },
  { id: 5, img: "/images/partner/patner-5.png", aosDelay: "200" },
];

const Partner: React.FC = () => {
  return (
    <div className="bg-emerald-50 dark:bg-gray-dark dark:text-white p-8 mb-12">
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Our Partner
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Partner & Friend
          </h1>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {PatnerData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img src={data.img} alt={`partner-${data.id}`} className="h-16 w-auto object-contain mb-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
