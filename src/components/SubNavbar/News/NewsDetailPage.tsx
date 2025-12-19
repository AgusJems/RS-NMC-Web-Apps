import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { appSetting } from "../../../../appSetting";

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
      const res = await fetch(`${appSetting.apiUrl}/api/getNewsById/${id}`);
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

  const sanitizeHtml = (html: string) => {
    return (
      html
        .replace(/background-color:[^;"]+;?/gi, "")
        .replace(/color:[^;"]+;?/gi, "")
        .replace(/style=""/gi, "")
    );
  };

  return (
    <div className="py-10 justify-items-center dark:bg-black dark:text-white">
      <div className="px-4">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {news.nama_berita}
          </h1>

          {/* Image */}
          <div
            data-aos="fade-up"
            className="relative w-full h-full mb-6 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={news.image}
              alt={news.nama_berita}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
      <div className="px-8 max-w-4xl mx-auto">
        {/* Content */}
        <div
          data-aos="fade-up"
          className="news-content prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-300 text-sm sm:text-lg"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(news.deskripsi) }}
        />

        {/* Date */}
        <p className="mt-6 text-sm text-gray-400">
          Dipublikasikan pada:{" "}
          {new Date(news.created_at).toLocaleDateString("id-ID")}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailPage;
