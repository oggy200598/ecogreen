// src/pages/About.jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function About() {
  return (
    <main className="bg-gray-50">
      {/* ✅ Hero Banner chỉ có ảnh */}
      <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <motion.img
          src="/about-banner.jpg"
          alt="EcoGreen banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </section>

      
      {/* ✅ Nội dung chính */}
      <div className="pt-10 px-6 pb-20 space-y-20">
        {/* Giới thiệu */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent mb-6">
            Về EcoGreen
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            EcoGreen tiên phong trong lĩnh vực{" "}
            <span className="font-semibold text-green-600">bao bì tái chế</span>,
            mang đến giải pháp bền vững cho doanh nghiệp và cộng đồng, giảm
            nhựa dùng một lần – bảo vệ hành tinh xanh.
          </p>
        </motion.section>

        {/* Thống kê */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
        >
          {[
            { number: "+500", label: "Khách hàng doanh nghiệp" },
            { number: "10 tấn", label: "Nhựa giảm mỗi năm" },
            { number: "2019", label: "Năm thành lập" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl p-10 bg-white shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-extrabold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Đội ngũ */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
        >
          <motion.img
            variants={fade}
            src="/about-team.jpg"
            alt="EcoGreen team"
            className="rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
          />
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Chúng tôi là ai?
            </h2>
            <p className="text-gray-700 leading-loose text-lg">
              EcoGreen quy tụ những con người trẻ trung, đầy đam mê sáng tạo,
              cùng chung lý tưởng về một hành tinh xanh. Mỗi sản phẩm của chúng
              tôi là kết tinh của tâm huyết, trách nhiệm và niềm tin vào{" "}
              <span className="font-semibold text-green-600">
                giá trị bền vững
              </span>{" "}
              mà chúng tôi mang lại.
            </p>
          </motion.div>
        </motion.section>

        {/* Sứ mệnh */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-green-700">
            🌍 Sứ mệnh của chúng tôi
          </h2>
          <p className="text-gray-700 leading-loose text-lg">
            Mang đến giải pháp bao bì{" "}
            <span className="font-semibold text-green-600">
              an toàn – thẩm mỹ – hiệu quả
            </span>{" "}
            giúp doanh nghiệp đồng hành cùng xu hướng xanh, giảm thiểu rác thải
            nhựa, lan tỏa thông điệp sống bền vững.
          </p>
        </motion.section>

        {/* Giá trị cốt lõi */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            Giá trị cốt lõi
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🌱", text: "Bền vững & Trách nhiệm" },
              { icon: "✅", text: "Chất lượng & Uy tín" },
              { icon: "💡", text: "Đổi mới & Sáng tạo" },
              { icon: "🤝", text: "Đồng hành cùng khách hàng" },
            ].map((val, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="p-6 bg-white rounded-lg shadow hover:bg-green-50 transition flex items-center justify-center text-lg font-medium"
              >
                <span className="text-2xl mr-3">{val.icon}</span>
                {val.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center py-16 rounded-2xl bg-linear-to-r from-emerald-500 to-green-600 text-white shadow-xl max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cùng EcoGreen kiến tạo tương lai xanh 🌳
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-white/90 text-lg">
            Hãy bắt đầu hành trình bao bì bền vững cho doanh nghiệp của bạn ngay
            hôm nay.
          </p>
          <a
            href="/lien-he"
            className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Liên hệ ngay
          </a>
        </motion.section>
      </div>
    </main>
  );
}
