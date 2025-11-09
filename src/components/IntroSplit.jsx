export default function IntroSplit() {
  return (
    <section className="bg-[#f3f6f4] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative">

        {/* Watermark nhẹ hơn */}
        <div className="pointer-events-none select-none absolute right-4 bottom-6 text-6xl md:text-8xl font-extrabold text-emerald-900/10 tracking-widest">
          +5 NĂM
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          {/* Trái: tiêu đề */}
          <div className="text-center md:text-right md:pr-10 relative">
            <p className="text-emerald-700 uppercase tracking-wide text-sm mb-2">
              Giới thiệu
            </p>
            <h2 className="text-[28px] md:text-[34px] leading-tight font-extrabold text-emerald-900 uppercase">
              CÔNG TY CPĐT ECOGREEN
            </h2>
            {/* Vạch dọc phân chia */}
            <span className="hidden md:block absolute top-0 right-0 h-full w-px bg-emerald-200 translate-x-5"></span>
          </div>

          {/* Phải: mô tả + CTA */}
          <div className="md:pl-10 text-gray-700 leading-relaxed">
            <p>
              Với hơn 5 năm kinh nghiệm trong lĩnh vực bao bì giấy, EcoGreen đồng hành cùng nhiều thương hiệu trong và ngoài nước. 
              Chúng tôi mở rộng quy mô, cải tiến quy trình và áp dụng công nghệ hiện đại để mang lại chất lượng ổn định, chi phí tối ưu và dịch vụ tận tâm.
            </p>

            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <a
                href="/gioi-thieu"
                className="px-5 py-2.5 rounded-md font-semibold text-white bg-linear-to-r from-emerald-600 to-green-600 shadow hover:scale-105 hover:from-emerald-700 hover:to-green-700 transition-all duration-300"
              >
                Đọc thêm →
              </a>
              <a
                href="/lien-he"
                className="px-5 py-2.5 rounded-md font-semibold border border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:scale-105 transition-all duration-300"
              >
                Liên hệ
              </a>
            </div>

            <div className="mt-6 text-[12px] tracking-wider font-semibold text-emerald-900 uppercase">
              KINH NGHIỆM LÀM VIỆC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
