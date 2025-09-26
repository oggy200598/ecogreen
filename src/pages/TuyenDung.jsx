// src/pages/TuyenDung.jsx
import { Briefcase, CheckCircle, Send } from "lucide-react";

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
  ];

  return (
    <div className="px-6 py-12 bg-gray-50 space-y-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
          Cơ hội nghề nghiệp tại EcoGreen 🌱
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          EcoGreen tìm kiếm những đồng đội nhiệt huyết, cùng nhau xây dựng một
          tương lai xanh – bền vững. Hãy tham gia cùng chúng tôi!
        </p>
      </section>

      {/* Danh sách việc làm */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
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
            <button className="flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition">
              <Send size={18} /> Ứng tuyển ngay
            </button>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-3">
          Không tìm thấy vị trí phù hợp?
        </h2>
        <p className="mb-5 text-white/90">
          Gửi CV của bạn về email <b>tuyendung@ecogreen.vn</b>. Chúng tôi sẽ
          liên hệ khi có cơ hội phù hợp.
        </p>
        <a
          href="mailto:tuyendung@ecogreen.vn"
          className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Gửi CV ngay
        </a>
      </section>
    </div>
  );
}
