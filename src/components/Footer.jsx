import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 to-green-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Cột 1: Thông tin */}
        <div>
          <h4 className="text-lg font-bold mb-3">EcoGreen</h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Giải pháp bao bì thân thiện môi trường 🌱  
            Mang đến sự an toàn, bền vững và tiết kiệm chi phí.
          </p>
        </div>

        {/* Cột 2: Liên hệ */}
        <div>
          <h4 className="text-lg font-bold mb-3">Liên hệ</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> <a href="tel:0901389279" className="hover:underline">0901 389 279</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <a href="mailto:info@ecogreen.vn" className="hover:underline">info@ecogreen.vn</a>
            </li>
            <li>143/2 Nguyễn Trãi, P2, Q5, HCM</li>
          </ul>
        </div>

        {/* Cột 3: Kết nối */}
        <div>
          <h4 className="text-lg font-bold mb-3">Kết nối với chúng tôi</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Facebook size={18} />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <img src="/zalo.png" alt="Zalo" className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/70">
        © 2025 EcoGreen • Packaging from paper ♻️
      </div>
    </footer>
  );
}
