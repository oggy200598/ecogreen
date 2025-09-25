export default function ServicesStrip(){
const items = [
  { t: "Tư vấn nhanh", d: "Nhận báo giá trong ngày" },
  { t: "Thiết kế miễn phí", d: "Mẫu demo theo yêu cầu" },
  { t: "In ấn chất lượng", d: "Offset/Flexo/UV" },
  { t: "Giao hàng toàn quốc", d: "Nhanh – đúng hẹn" },
];

  return(
    <section className="bg-green-700 text-white">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-4">
        {items.map((it,i)=>(
          <div key={i} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center text-yellow-300">✓</div>
            <div>
              <p className="font-semibold">{it.t}</p>
              <p className="text-white/80 text-sm">{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
