// src/pages/TuyenDung.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle, Send, Upload, X } from "lucide-react";

export default function TuyenDung() {
  const jobs = [
    {
      title: "Nhân viên thiết kế bao bì",
      desc: "Thiết kế và sáng tạo mẫu bao bì giấy thân thiện môi trường.",
      benefits: ["Lương hấp dẫn", "Môi trường sáng tạo", "Cơ hội thăng tiến"],
    },
    {
      title: "Nhân viên kinh doanh",
      desc: "Tìm kiếm và chăm sóc khách hàng, mở rộng thị trường EcoGreen.",
      benefits: ["Thu nhập theo doanh số", "Đào tạo kỹ năng", "Thưởng quý/năm"],
    },
    {
      title: "Nhân viên Marketing",
      desc: "Lên kế hoạch và triển khai chiến dịch quảng bá thương hiệu, quản lý nội dung truyền thông và kênh mạng xã hội.",
      benefits: [
        "Môi trường năng động, sáng tạo",
        "Tham gia sự kiện và hội chợ",
        "Đào tạo kỹ năng Digital Marketing",
      ],
    },
    {
      title: "Nhân viên vận hành kho",
      desc: "Phụ trách nhập – xuất – kiểm kê hàng hóa, đảm bảo quy trình vận hành kho diễn ra trơn tru và chính xác.",
      benefits: [
        "Phụ cấp ăn trưa, xăng xe",
        "Môi trường làm việc thân thiện",
        "Thưởng năng suất cuối năm",
      ],
    },
  ];

  const [form, setForm] = useState({ name: "", email: "", position: "", file: null });
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("🎉 CV của bạn đã được gửi thành công! Chúng tôi sẽ sớm liên hệ.");
    setForm({ name: "", email: "", position: "", file: null });
    setTimeout(() => {
      setMessage("");
      setShowForm(false);
    }, 2500);
  };

  return (
    <main className="bg-gray-50">
      {/* ✅ Hero Banner */}
      <section className="relative w-full h-[40vh] md:h-[80vh] overflow-hidden">
        <motion.img
          src="/banner-career.jpg"
          alt="EcoGreen Packaging"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </section>

      {/* ✅ Danh sách việc làm */}
      <div className="px-6 py-20 space-y-16">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-emerald-600" size={28} />
                <h2 className="text-xl font-semibold text-emerald-700">
                  {job.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">{job.desc}</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {job.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={18} /> {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setForm((f) => ({ ...f, position: job.title }));
                  setShowForm(true);
                }}
                className="flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
              >
                <Send size={18} /> Ứng tuyển ngay
              </button>
            </motion.div>
          ))}
        </motion.section>
      </div>

      {/* ✅ Popup Form (Modal) */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
            >
              {/* Nút đóng */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
                Ứng tuyển vị trí: {form.position}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email liên hệ"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500 outline-none"
                />
                <label className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50">
                  <Upload className="text-green-600" size={20} />
                  <span>
                    {form.file ? form.file.name : "Tải lên CV của bạn (PDF, DOC...)"}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
                  />
                </label>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                  <Send size={18} /> Gửi CV ngay
                </button>
              </form>

              {message && (
                <p className="mt-4 text-center text-green-600 font-medium">
                  {message}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
