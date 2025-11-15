import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../landing/Navbar/Navbar";
import Footer from "../landing/Footer/Footer";
import FloatingWA from "../components/ui/floating/FloatingWA";

const LandingLayout: React.FC = () => {
  return (
    <div className="dark:bg-dark dark:text-white">
      <Navbar />
      <Outlet />
      <FloatingWA />
      <Footer />
    </div>
  );
};

export default LandingLayout;
