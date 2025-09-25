// src/components/WhyUs.jsx
import { Award, ShieldCheck, BadgeCheck, Handshake } from "lucide-react";

export default function WhyUs() {
  const items = [
    { icon: Award,       n: "+10 năm", d: "Kinh nghiệm trong ngành bao bì, đảm bảo hiểu rõ nhu cầu khách hàng." },
    { icon: ShieldCheck, n: "ISO",     d: "Quy trình chuẩn hóa theo ISO, kiểm soát chất lượng nghiêm ngặt." },
    { icon: BadgeCheck,  n: "Giá tốt", d: "Giải pháp tối ưu chi phí, phù hợp với doanh nghiệp vừa và lớn." },
    { icon: Handshake,   n: "Uy tín",  d: "Đồng hành cùng nhiều thương hiệu lớn, xây dựng niềm tin bền vững." },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-100 bg-white/90 backdrop-blur shadow-xl">
        <h3 className="pt-12 text-center text-3xl font-extrabold text-emerald-800 tracking-tight">
          Vì sao chọn EcoGreen 🌱
        </h3>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Chúng tôi mang đến sự an tâm về chất lượng, chi phí và sự đồng hành dài lâu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10 md:p-14">
          {items.map((it, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white p-7 text-center ring-1 ring-emerald-100 shadow-md transition
                         hover:-translate-y-2 hover:shadow-2xl hover:ring-emerald-300 focus-within:-translate-y-2"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 shadow-inner">
                <it.icon size={22} aria-hidden />
              </div>
              <p className="text-xl font-bold text-emerald-700">{it.n}</p>
              <p className="mt-2 text-gray-600 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        {/* đường viền gradient */}
        <div className="px-12 pb-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
