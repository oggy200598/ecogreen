import { Facebook, Instagram, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-green-600 text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        
        {/* Cột 1: Thông tin */}
        <div>
          <h4 className="text-2xl font-bold mb-4">EcoGreen</h4>
          <p className="text-white/85 text-sm leading-relaxed">
            Giải pháp bao bì thân thiện môi trường 🌱  
            Mang đến sự an toàn, bền vững và tiết kiệm chi phí cho doanh nghiệp.
          </p>
        </div>

        {/* Cột 2: Liên hệ */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Liên hệ</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} />{" "}
              <a href="tel:0901389279" className="hover:underline">
                0901 389 279
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />{" "}
              <a href="mailto:info@ecogreen.vn" className="hover:underline">
                info@ecogreen.vn
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/85">
              143/2 Nguyễn Trãi, P2, Q5, HCM
            </li>
          </ul>
        </div>

        {/* Cột 3: Kết nối */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Kết nối với chúng tôi</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/ecogreenpackaging365"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/25 transition duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://zaloapp.com/qr/p/e9mlb4yx4wtg"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/25 transition duration-300"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://www.instagram.com/ecogreen.offical/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/25 transition duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-10 border-t border-white/25 pt-4 text-center text-sm text-white/80">
        © 2025 <span className="font-semibold">EcoGreen</span> • Packaging from paper ♻️  
      </div>
    </footer>
  );
}
