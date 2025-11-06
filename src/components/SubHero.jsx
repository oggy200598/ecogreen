// SubHero.jsx
import { Link } from "react-router-dom";

export default function SubHero({
  title = "Cam kết phát triển bền vững vì con người và hành tinh 🌍",
  kicker = "CHÚNG TÔI NGHĨ CHO TƯƠNG LAI",
  cta = "Tìm hiểu thêm",
  to = "/sustainability",
  image = "/kids.jpg" // ảnh để trong /public
}) {
  return (
    <section className="relative isolate overflow-hidden h-[360px] md:h-[460px] bg-gray-100">
      {/* Ảnh nền */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay gradient tối nhẹ */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

      {/* Thanh màu ở đáy */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="bg-linear-to-r from-emerald-600 to-green-600 rounded-tr-[96px] rounded-tl-2xl p-6 md:p-10 shadow-2xl">
            <p className="text-white/80 text-xs md:text-sm font-semibold tracking-widest">
              {kicker}
            </p>
            <h2 className="mt-2 text-white text-2xl md:text-4xl font-bold leading-snug max-w-3xl drop-shadow-md">
              {title}
            </h2>
            <div className="mt-6">
              <Link
                to={to}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 text-green-800 px-5 py-2.5 text-sm md:text-base font-semibold shadow hover:bg-white hover:scale-105 transition-all duration-300"
              >
                {cta} <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
