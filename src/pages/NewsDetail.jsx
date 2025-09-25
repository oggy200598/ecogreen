import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/news"; // nhớ tạo file src/data/news.js

export default function NewsDetail() {
  const { slug } = useParams();
  const post = newsData[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h1>
        <Link to="/tin-tuc" className="text-green-600 hover:underline">
          ← Quay lại Tin tức
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-gray-50 min-h-screen">
      {/* Hero / Cover */}
      <div className="relative">
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            className="h-[240px] md:h-[360px] w-full object-cover"
          />
        ) : (
          <div className="h-[200px] md:h-[280px] w-full bg-gradient-to-r from-emerald-600 to-green-500" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Breadcrumb + Title */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto px-6 py-6">
            <nav className="text-white/80 text-sm mb-2">
              <Link to="/" className="hover:underline">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to="/tin-tuc" className="hover:underline">Tin tức</Link>
            </nav>
            <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow -mt-10 md:-mt-14 p-6 md:p-8 relative">
          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              {post.date}
            </time>
            <Link to="/tin-tuc" className="text-emerald-600 hover:underline">
              ← Quay lại
            </Link>
          </div>

          {/* Nội dung */}
          <div className="prose prose-emerald max-w-none mt-6 whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </div>
    </article>
  );
}
