import { motion } from "framer-motion";
import { Leaf, Factory, Globe2 } from "lucide-react";

export default function Sustainability() {
  return (
    <section className="relative w-full from-green-50 via-emerald-50 to-green-100 py-20 px-6 overflow-hidden">
      {/* Hiệu ứng nền lá */}
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/leaves.svg')] bg-repeat bg-center"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Tiêu đề */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6"
        >
          
        </motion.h2>

        {/* Đoạn giới thiệu */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed text-lg"
        >
          Tại <span className="font-semibold text-green-700">EcoGreen</span>, chúng tôi tin rằng 
          mỗi sản phẩm bao bì không chỉ phục vụ nhu cầu sử dụng mà còn góp phần 
          tạo nên tương lai xanh cho Trái Đất. Chúng tôi cam kết phát triển bền vững 
          thông qua những hành động thiết thực và có ý nghĩa.
        </motion.p>

        {/* 3 cột nội dung */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-green-600 mb-4" />,
              title: "Nguyên liệu thân thiện",
              desc: "Sử dụng giấy tái chế, bã mía, tre và vật liệu compostable, giúp giảm rác thải nhựa và bảo vệ môi trường.",
            },
            {
              icon: <Factory className="w-10 h-10 text-green-600 mb-4" />,
              title: "Sản xuất xanh",
              desc: "Ứng dụng công nghệ tiết kiệm năng lượng, giảm phát thải CO₂, hướng tới mục tiêu 'Carbon Neutral'.",
            },
            {
              icon: <Globe2 className="w-10 h-10 text-green-600 mb-4" />,
              title: "Hợp tác bền vững",
              desc: "Đồng hành cùng các tổ chức, doanh nghiệp và cộng đồng trong việc xây dựng chuỗi giá trị xanh dài lâu.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
