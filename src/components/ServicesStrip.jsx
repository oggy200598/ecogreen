import { CheckCircle } from "lucide-react"

export default function ServicesStrip() {
  const items = [
    { t: "Tư vấn nhanh", d: "Nhận báo giá trong ngày" },
    { t: "Thiết kế miễn phí", d: "Mẫu demo theo yêu cầu" },
    { t: "In ấn chất lượng", d: "Offset / Flexo / UV" },
    { t: "Giao hàng toàn quốc", d: "Nhanh – đúng hẹn" },
  ];

  return (
    <section className="text-white bg-gradient-to-r from-emerald-600 to-green-600">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center sm:items-start gap-3 sm:gap-4 justify-center sm:justify-start text-center sm:text-left hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-lg">{it.t}</p>
              <p className="text-white/90 text-sm">{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
