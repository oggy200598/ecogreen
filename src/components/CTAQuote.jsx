import { Link } from "react-router-dom";

export default function CTAQuote() {
  return (
    <section
      className="
        py-16 relative
        bg-gradient-to-r from-emerald-600 to-green-600
        text-white text-center
      "
    >
      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
          Cần thiết kế / in ấn thùng carton theo yêu cầu?
        </h3>
        <p className="mt-3 text-white/90 text-lg">
          Gửi file / ý tưởng – tư vấn và báo giá nhanh chóng ⚡
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="tel:0901389279"
            className="
              px-6 py-3 rounded-xl font-semibold
              bg-yellow-400 text-black shadow-md
              hover:bg-yellow-300 hover:scale-105
              transition-all duration-300
            "
          >
            📞 Gọi Hotline
          </a>

          <Link
            to="/lien-he"
            className="
              px-6 py-3 rounded-xl font-semibold
              border border-white/80
              bg-white/10 backdrop-blur
              hover:bg-white hover:text-green-700 hover:scale-105
              transition-all duration-300
            "
          >
            💬 Nhận báo giá
          </Link>
        </div>
      </div>

      {/* Hiệu ứng overlay mờ phía dưới */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
    </section>
  );
}
