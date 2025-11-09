// src/pages/About.jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const fade = {
  hidden: { opacity: 0 },
  show:  { opacity: 1, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <div className="px-6 py-12 bg-gray-50 space-y-20">
      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent mb-6">
          Về EcoGreen 🌱
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          EcoGreen tập trung vào giải pháp bao bì thân thiện môi trường làm từ
          giấy tái chế. Chúng tôi đồng hành cùng doanh nghiệp và người tiêu dùng
          trong hành trình giảm nhựa dùng một lần, hướng tới phát triển bền vững.
        </p>
      </motion.section>

      {/* Stats */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto"
      >
        {[
          { number: "+500", label: "Khách hàng doanh nghiệp" },
          { number: "10 tấn", label: "Nhựa giảm mỗi năm" },
          { number: "2019", label: "Năm thành lập" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="rounded-xl p-8 shadow bg-white hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl font-extrabold text-green-600">{stat.number}</div>
            <div className="mt-2 text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Who we are */}
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
          className="rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
        />
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-4 text-green-700">Chúng tôi là ai?</h2>
          <p className="text-gray-700 leading-loose">
            EcoGreen là tập thể những người trẻ tràn đầy nhiệt huyết, đam mê đổi mới và sáng tạo,
            với khát vọng mang lại những giá trị thiết thực và bền vững cho xã hội. Chúng tôi lựa
            chọn con đường phát triển gắn liền với trách nhiệm bảo vệ môi trường, thông qua việc
            nghiên cứu và sản xuất các giải pháp bao bì xanh, thân thiện với thiên nhiên, thay thế
            cho sản phẩm nhựa dùng một lần.
            <br /><br />
            Mỗi sản phẩm của EcoGreen không chỉ là bao bì, mà còn là thông điệp về lối sống xanh,
            trách nhiệm với cộng đồng. Dù nhỏ bé, mỗi bao bì đúng cách đều góp phần tạo nên thay đổi.
          </p>
        </motion.div>
      </motion.section>

      {/* Mission */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-green-700">
          🌍 Sứ mệnh của EcoGreen
        </h2>
        <p className="text-gray-700 leading-loose text-lg">
          EcoGreen cam kết mang đến những giải pháp bao bì{" "}
          <span className="font-semibold text-green-600">an toàn, thẩm mỹ và chi phí hợp lý</span>,
          góp phần giảm thiểu tác động tiêu cực đến môi trường. Chúng tôi đồng hành cùng doanh nghiệp
          trong việc <span className="italic">xây dựng thương hiệu bền vững</span>, lan tỏa lối sống xanh.
        </p>
      </motion.section>

      {/* Values */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700">Giá trị cốt lõi</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "🌍", text: "Bền vững" },
            { icon: "✅", text: "Chất lượng" },
            { icon: "🔎", text: "Minh bạch" },
            { icon: "🤝", text: "Đồng hành cùng khách hàng" },
          ].map((val, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="p-5 bg-white rounded-lg shadow hover:bg-green-50 transition flex items-center justify-center text-lg font-medium"
            >
              <span className="text-xl mr-2">{val.icon}</span>
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
        className="text-center py-14 rounded-xl bg-linear-to-r from-emerald-500 to-green-600 text-white shadow-lg max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Hãy cùng EcoGreen kiến tạo tương lai xanh 🌳</h2>
        <p className="mb-6 max-w-2xl mx-auto text-white/90">
          Liên hệ với chúng tôi để bắt đầu hành trình bao bì bền vững cho doanh nghiệp của bạn.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Liên hệ ngay
        </a>
      </motion.section>
    </div>
  );
}
