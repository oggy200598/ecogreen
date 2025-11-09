// src/components/Header.jsx
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-300 transition-all " +
        (scrolled ? "shadow-lg shadow-black/10" : "")
      }
    >
      <div
        className="
          text-white relative
          bg-linear-to-r from-emerald-600 to-green-600
          supports-backdrop-filter:backdrop-blur
          supports-backdrop-filter:from-emerald-600/85 supports-backdrop-filter:to-green-600/85
        "
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="EcoGreen" className="h-9 lg:h-12 w-auto" />
          </Link>

          <nav className="hidden lg:block">
            <Navbar isMobile={false} closeMenu={() => setIsOpen(false)} />
          </nav>

          <button
            className="lg:hidden inline-grid place-items-center h-11 w-11 rounded-md text-2xl hover:bg-white/10 transition"
            onClick={() => setIsOpen(v => !v)}
            aria-label="Mở/đóng menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-280 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu mobile: cao theo nội dung, giới hạn đến gần đáy */}
      <div
        id="mobile-menu"
        className={
          "lg:hidden fixed inset-x-0 top-16 z-320 " + // ❗ không còn bottom-0
          (isOpen ? "block" : "hidden")
        }
        role="dialog"
        aria-modal="true"
      >
        <div
          className="
            max-h-[calc(100vh-4rem)] overflow-y-auto
            bg-emerald-700 text-white shadow-2xl rounded-b-xl
            pb-[env(safe-area-inset-bottom)]   /* hỗ trợ máy có tai thỏ */
          "
        >
          <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
    </header>
  );
}
