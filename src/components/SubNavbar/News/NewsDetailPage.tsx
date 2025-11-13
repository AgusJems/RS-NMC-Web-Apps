import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsData from "../../newsData/NewsData";

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = NewsData.find((item) => item.id === Number(id));

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-500">
        <p>Berita tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <>
    <div className="py-10 mb-10 justify-items-center">
        <div className="min-h-screen px-4 py-6 dark:bg-black dark:text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{news.name}</h1>
            <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <img
                src={news.img}
                alt={news.name}
                className="w-full h-full object-cover object-top"
                />
            </div>
                <p className="text-gray-500 leading-relaxed">{news.text}</p>
            </div>
        </div>
    </div>
    </>
  );
};

export default NewsDetailPage;
