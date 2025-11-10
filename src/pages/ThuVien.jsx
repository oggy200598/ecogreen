import { motion } from "framer-motion";

export default function ThuVien() {
  // 🖼️ Hình ảnh chia nhóm
  const galleries = {
    "Sản phẩm": [
      { src: "/gallery/eco1.jpg", title: "Bao bì giấy cao cấp" },
      { src: "/gallery/eco2.jpg", title: "Túi giấy thân thiện môi trường" },
      { src: "/gallery/eco3.jpg", title: "Hộp giấy in ấn thương hiệu" },
      { src: "/gallery/eco4.jpg", title: "Bao bì quà tặng cao cấp" },
      { src: "/gallery/eco5.jpg", title: "Túi giấy kraft tái chế" },
      { src: "/gallery/eco6.jpg", title: "Bao bì cà phê thân thiện" },
      { src: "/gallery/eco7.jpg", title: "Ly giấy in thương hiệu" },
      { src: "/gallery/eco8.jpg", title: "Túi đựng thực phẩm sinh học" },
    ],
    "Xưởng sản xuất": [
      { src: "/gallery/factory1.jpg", title: "Quy trình in offset bao bì" },
      { src: "/gallery/factory2.jpg", title: "Công nhân vận hành máy in" },
      { src: "/gallery/factory3.jpg", title: "Kiểm tra chất lượng sản phẩm" },
      { src: "/gallery/factory4.jpg", title: "Đóng gói bao bì thành phẩm" },
      { src: "/gallery/factory5.jpg", title: "Xưởng sản xuất hiện đại" },
      { src: "/gallery/factory6.jpg", title: "Vật liệu giấy tái chế nhập khẩu" },
    ],
    "Sự kiện & đối tác": [
      { src: "/gallery/event1.jpg", title: "EcoGreen tại Hội chợ Bao bì 2024" },
      { src: "/gallery/event2.jpg", title: "Hợp tác cùng đối tác chiến lược" },
      { src: "/gallery/event3.jpg", title: "Workshop Thiết kế xanh cùng sinh viên" },
      { src: "/gallery/event4.jpg", title: "Ký kết thỏa thuận với đối tác mới" },
      { src: "/gallery/event5.jpg", title: "EcoGreen đồng hành cùng doanh nghiệp trẻ" },
    ],
  };

  // 🎥 Video thật về bao bì
  const videos = [
    {
      src: "https://www.youtube.com/embed/ee39u47n2mk",
      title: "Mass Production Process of Packaging Boxes (Box Factory in Korea)",
    },
    {
      src: "https://www.youtube.com/embed/KnLzLzPfRlQ",
      title: "How Paper Packaging Is Manufactured | Greif Paper Solutions",
    },
    {
      src: "https://www.youtube.com/embed/Ay-EPRMiv7U",
      title: "The Art of Packaging | Production From Start To Finish",
    },


  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="px-6 py-24 bg-gray-50 space-y-20">
      {/* ✅ Tiêu đề trang */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-4">
          Thư viện EcoGreen 🌿
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
          Hành trình phát triển của EcoGreen qua những hình ảnh sản phẩm, xưởng
          sản xuất, và các video thực tế từ quy trình chế tạo bao bì.
        </p>
      </motion.section>

      {/* 🖼️ Hình ảnh theo nhóm */}
      {Object.entries(galleries).map(([category, list], idx) => (
        <motion.section
          key={idx}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-emerald-700 text-center">
            {category}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {list.map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="p-3 text-center text-gray-700 text-sm">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      ))}

      {/* 🎥 Video */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
          Video thực tế về quy trình sản xuất bao bì 🎥
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <iframe
                src={v.src}
                title={v.title}
                allowFullScreen
                className="w-full h-64"
              />
              <p className="p-3 text-center text-gray-700">{v.title}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
