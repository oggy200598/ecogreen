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

  return (
    <section
      className="
        w-full py-10 overflow-hidden 
        text-white relative
        bg-gradient-to-r from-emerald-600 to-green-600
      
      "
    >
      {/* Tiêu đề */}
      <h3 className="text-center text-xl font-semibold text-white mb-8">
        Đối tác đồng hành cùng EcoGreen
      </h3>

      {/* Marquee */}
      <div className="w-full overflow-hidden">
        <div className="flex justify-center items-center gap-20 whitespace-nowrap animate-[scroll_25s_linear_infinite] h-24">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="partner"
              className="h-16 md:h-20 object-contain opacity-90 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
