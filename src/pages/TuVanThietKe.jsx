// src/pages/TuVanThietKe.jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const fade = {
  hidden: { opacity: 0 },
  show:  { opacity: 1, transition: { duration: 0.5 } },
};

export default function TuVanThietKe() {
  return (
    <div className="p-6 space-y-12">
      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center py-12 bg-emerald-50 rounded-xl shadow"
      >
        <motion.img
          variants={fade}
          src="/TuVanThietKe/design.jpg"
          alt="Thiết kế bao bì EcoGreen"
          className="w-full max-h-72 object-cover rounded-lg mb-6"
          loading="lazy"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700">
          Tư vấn & Thiết kế Bao bì theo yêu cầu 🌱
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          EcoGreen mang đến dịch vụ thiết kế bao bì sáng tạo, tối ưu chi phí,
          thân thiện với môi trường và nâng tầm thương hiệu của bạn.
        </p>
      </motion.section>

      {/* Quy trình làm việc */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-emerald-600 text-center mb-8">
          Quy trình làm việc
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              img: "/TuVanThietKe/idea.jpg",
              title: "1. Lắng nghe",
              desc: "Tiếp nhận yêu cầu, phân tích nhu cầu của khách hàng.",
            },
            {
              img: "/TuVanThietKe/sketch.jpg",
              title: "2. Thiết kế mẫu",
              desc: "Đưa ra bản vẽ demo & tư vấn chất liệu phù hợp.",
            },
            {
              img: "/TuVanThietKe/edit.jpg",
              title: "3. Chỉnh sửa",
              desc: "Cập nhật thiết kế theo góp ý cho đến khi hài lòng.",
            },
            {
              img: "/TuVanThietKe/package.jpg",
              title: "4. Hoàn thiện",
              desc: "Bàn giao file in ấn & triển khai sản xuất nhanh chóng.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-4 bg-white shadow rounded-lg text-center"
            >
              <img
                src={step.img}
                alt={step.title}
                className="h-24 mx-auto mb-3 object-cover"
                loading="lazy"
              />
              <h3 className="font-bold text-emerald-700">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lợi ích */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-emerald-50 py-10 px-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-semibold text-emerald-600 text-center mb-6">
          Vì sao chọn EcoGreen?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>Thiết kế miễn phí cho khách hàng thân thiết.</li>
            <li>Đội ngũ chuyên nghiệp, sáng tạo và nhiều kinh nghiệm.</li>
            <li>Chất liệu giấy tái chế, thân thiện môi trường.</li>
            <li>Hỗ trợ sản xuất và giao hàng toàn quốc.</li>
          </ul>

          <motion.img
            variants={fade}
            src="/TuVanThietKe/eco-packaging.jpg"
            alt="Bao bì EcoGreen"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center py-12"
      >
        <h2 className="text-2xl font-semibold text-emerald-700">
          Sẵn sàng để bắt đầu dự án cùng EcoGreen?
        </h2>
        <p className="text-gray-600 mt-3">
          Liên hệ ngay để được tư vấn và nhận mẫu thiết kế demo miễn phí.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
        >
          Liên hệ ngay
        </a>
      </motion.section>
    </div>
  );
}
