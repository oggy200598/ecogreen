import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/news";

export default function NewsDetail() {
  const { slug } = useParams();
  const post = newsData[slug];

  // Nếu không có bài viết
  if (!post) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h1>
        <Link to="/tin-tuc" className="text-green-600 hover:underline">
          ← Quay lại Tin tức
        </Link>
      </section>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <header className="relative mt-[90px] group overflow-hidden">
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-[260px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-[260px] md:h-[380px] w-full bg-gradient-to-r from-emerald-600 to-green-500" />
        )}

        {/* Overlay phủ full */}
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

        {/* Breadcrumb + Tiêu đề */}
        <div className="absolute bottom-[40px] left-0 right-0 text-white px-6 py-8">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-white/80 mb-2">
              <Link to="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link to="/tin-tuc" className="hover:underline">
                Tin tức
              </Link>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold drop-shadow-md">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Nội dung */}
      <section className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow -mt-10 md:-mt-14 p-6 md:p-8 relative">
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

          {/* Nội dung bài viết */}
          <article className="prose prose-emerald max-w-none mt-6 whitespace-pre-line leading-relaxed">
            {post.content}
          </article>
        </div>
      </section>
    </main>
  );
}
