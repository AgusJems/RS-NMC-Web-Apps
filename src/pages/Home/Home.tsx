// src/pages/LandingPage/LandingPage.tsx
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../landing/Carousel/Carousel";

const HomeLanding: React.FC = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Carousel handleOrderPopup={() => console.log("Popup dibuka")} />
    </div>
  );
};

export default HomeLanding;
