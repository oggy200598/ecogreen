import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🌀 Hiệu ứng cuộn đổi nền + đổ bóng
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🚫 Khóa cuộn khi mở menu mobile
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // 🔄 Tự đóng menu khi đổi sang màn hình lớn
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[300] transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-md"
          : "bg-gradient-to-r from-emerald-600 to-green-600 text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-16 lg:h-20 transition-all">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
          
            className="h-9 lg:h-12 w-auto transition-transform hover:scale-105"
          />
        </Link>

        {/* ✅ Navbar desktop */}
        <nav className="hidden lg:block">
          <Navbar isMobile={false} closeMenu={() => setIsOpen(false)} />
        </nav>

        {/* ✅ Nút menu mobile */}
        <button
          className="lg:hidden inline-grid place-items-center h-11 w-11 rounded-md hover:bg-black/10 transition"
          onClick={() => setIsOpen(v => !v)}
          aria-label="Mở/đóng menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ✅ Overlay khi mở menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[280] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 right-0 z-[320] lg:hidden bg-emerald-700 text-white shadow-2xl rounded-b-xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-4">
                <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
