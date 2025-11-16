import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

interface NewsItem {
  id: number;
  jenis_id: number;
  nama_berita: string;
  deskripsi: string;
  image: string;
  created_at: string;
  jenis_nama?: string;
}

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600 });
    fetchNewsDetail();
  }, []);

  useEffect(() => {
  AOS.init({ duration: 600 });
  if (id) fetchNewsDetail();
}, [id]);


const fetchNewsDetail = async () => {
  if (!id) return;

  try {
    const res = await fetch(`http://localhost:3001/api/getNewsById/${id}`);
    const json = await res.json();
    setNews(json.data || null);
  } catch (err) {
    console.error("Error fetching detail:", err);
    setNews(null);
  } finally {
    setLoading(false);
  }
};


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Loading...
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Berita tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="py-10 mb-10 justify-items-center">
      <div className="min-h-screen px-4 py-6 dark:bg-black dark:text-white">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {news.nama_berita}
          </h1>

          {/* Image */}
          <div
            data-aos="fade-up"
            className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={news.image}
              alt={news.nama_berita}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div
            data-aos="fade-up"
            className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: news.deskripsi }}
          />

          {/* Date */}
          <p className="mt-6 text-sm text-gray-400">
            Dipublikasikan pada:{" "}
            {new Date(news.created_at).toLocaleDateString("id-ID")}
          </p>

        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
