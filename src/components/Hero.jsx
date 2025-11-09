import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[420px] md:h-[520px] overflow-hidden">
      {/* Ảnh nền */}
      <img
        src="/factory.jpg"
        alt="EcoGreen Packaging Factory"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay mạnh hơn, có lớp gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Nội dung */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl uppercase">
          EcoGreen Packaging
        </h1>
        <h2 className="text-lg md:text-xl text-white/90 mt-3 font-light max-w-2xl">
          Giải pháp bao bì xanh — đồng hành cùng doanh nghiệp phát triển bền vững
        </h2>
        <p className="mt-4 max-w-2xl text-white/85">
          Với hơn 10 năm kinh nghiệm trong lĩnh vực bao bì giấy, EcoGreen tự hào đồng hành cùng nhiều thương hiệu trong và ngoài nước.
        </p>

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <NavLink
            to="/gioi-thieu"
            className="px-6 py-3 bg-linear-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
          >
            Giới thiệu
          </NavLink>
          <NavLink
            to="/lien-he"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Liên hệ
          </NavLink>
        </div>
      </motion.div>
    </section>
  )
}
