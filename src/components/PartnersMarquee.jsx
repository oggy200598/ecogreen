export default function PartnersMarquee() {
  const logos = [
    "/partners/p1.png",
    "/partners/p2.png",
    "/partners/p3.png",
    "/partners/p4.png",
    "/partners/p5.png",
    "/partners/p6.png",
    "/partners/p7.png",
    "/partners/p8.png",
    "/partners/p9.png",
    "/partners/p10.png",
  ];

  // nhân đôi mảng để chạy nối đuôi nhau
  const allLogos = [...logos, ...logos];

  return (
    <section className="relative w-full py-10 overflow-hidden bg-gradient-to-r from-emerald-600 to-green-600">
      {/* Hiệu ứng fade mờ hai bên */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-emerald-600 to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-green-600 to-transparent z-10"></div>

      {/* Tiêu đề */}
      <h3 className="text-center text-xl font-semibold text-white mb-10">
        Đối tác đồng hành cùng EcoGreen
      </h3>

      {/* Marquee */}
      <div className="w-full overflow-hidden">
        <div
          className="flex items-center gap-88 whitespace-nowrap animate-[scroll_40s_linear_infinite]"
          style={{ animation: "scroll 40s linear infinite" }}
        >
          {allLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`partner-${i}`}
              loading="lazy"
              className="h-16 md:h-20 object-contain opacity-90 hover:opacity-100 transition duration-300 drop-shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
