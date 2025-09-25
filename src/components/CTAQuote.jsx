import {Link} from "react-router-dom"
export default function CTAQuote(){
  return(
    <section className="py-12 bg-green-600">
      <div className="container mx-auto px-6 text-center text-white">
        <h3 className="text-2xl font-bold">
         Cần thiết kế/in ấn thùng carton theo yêu cầu?
        </h3>
        <p className="mt-2 text-white/90">
          Gửi file/ý tưởng – tư vấn và báo giá nhanh
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <a href="tel:0901389279" className="px-5 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300">Gọi Hotline</a>
          <Link to="/lien-he" className="px-5 py-3 rounded-lg border border-white/60 hover:bg-white hover:text-green-700 transition">Nhận báo giá</Link>
        </div>
      </div>
    </section>
  )
}
