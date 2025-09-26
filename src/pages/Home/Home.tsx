// src/pages/LandingPage/LandingPage.tsx
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../landing/Carousel/Carousel";
import Partner from "../../landing/Partner/Partner";
import Service from "../../landing/Service/Service";
import Banner from "../../landing/Banner/Banner";
import Doctor from "../../landing/Doctor/Doctor";
import DoctorData from "../../components/doctorData/doctorData";
import Contact from "../../landing/Contact/Contact";
import News from "../../landing/News/News";
import Testimonial from "../../landing/Testimonial/Testimonial";

const HomeLanding: React.FC = () => {
  return (
    <div className="dark:bg-black dark:text-white overflow-x-hidden">
      <Carousel handleOrderPopup={() => console.log("Popup dibuka")} />
      <Partner />
      <Service />
      <Banner />
      <Doctor doctors={DoctorData} />
      <Contact />
      <News />
      <Testimonial />
    </div>
  );
};

export default HomeLanding;
