import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import TestimoniData, { NewsItem } from "../../newsData/TestimonialData";
import PromoData from "../../newsData/PromoData";
import NewsData from "../../newsData/NewsData";
import TipsData from "../../newsData/TipsData";

const tabs = ["Testimoni", "Promo Spesial", "Berita Menarik", "Tips Kesehatan"];

const NewsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Promo Spesial");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const getTabData = (tab: string): NewsItem[] => {
    switch (tab) {
      case "Testimoni":
        return TestimoniData;
      case "Promo Spesial":
        return PromoData;
      case "Berita Menarik":
        return NewsData;
      case "Tips Kesehatan":
        return TipsData;
      default:
        return [];
    }
  };

  const tabData = getTabData(activeTab);

  return (
    <div className="py-10 mb-10 justify-items-center">
      <div className="container min-h-screen px-4 py-6 dark:bg-black dark:text-white">
        {/* Header */}
        <div className="text-center mb-8 max-w-[800px] mx-auto">
          <h1 data-aos="fade-up" className="text-2xl font-bold text-center mb-4">
            {activeTab}
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Pilih kategori berita, promo, testimoni, atau tips kesehatan kami.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
            <div className="flex gap-2 sm:gap-3 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setVisibleCount(4);
                  }}
                  className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

        {/* Grid Content */}
        <div key={activeTab} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 
                   transition-opacity duration-500 ease-in-out 
                   animate-fadeIn">
          {tabData.slice(0, visibleCount).map((data) => (
            <div key={data.id} className="cursor-pointer">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-4 rounded-xl dark:bg-gray-800">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-2">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold text-black/80 dark:text-white">
                    {data.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2 mb-3">
                    {data.text}
                  </p>
                  <Link className="text-center" to={`/newspage/${data.id}`}>
                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200 cursor-pointer">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < tabData.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:scale-105 duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
