export default function Hero() {
  return (
    <section className="relative h-[420px] md:h-[520px] overflow-hidden">
      {/* Ảnh banner */}
      <img
        src="/factory.jpg"   // đổi ảnh bạn muốn
        alt="EcoGreen Factory"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay tối nhẹ */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Nội dung hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg uppercase">
          EcoGreen Packaging
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Với hơn 10 năm kinh nghiệm trong lĩnh vực bao bì giấy, EcoGreen tự hào đồng hành cùng nhiều thương hiệu trong và ngoài nước.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="/about"
            className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition"
          >
            Giới thiệu
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Liên hệ
          </a>
        </div>
      </div>
    </section>
  );
}
