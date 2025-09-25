import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // class link: trắng mặc định → vàng khi active/hover
  const linkClass = ({ isActive }) =>
    "relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors " +
    (isActive
      ? "text-yellow-300"
      : "text-white hover:text-yellow-300") +
    " after:absolute after:left-3 after:-bottom-1 after:h-0.5 after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-yellow-300 after:transition-transform " +
    (isActive ? "after:scale-x-100" : "hover:after:scale-x-100");

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={
        "sticky top-0 z-[200] transition-all " +
        (scrolled ? "shadow-lg shadow-black/10" : "")
      }
    >
      {/* Thanh navbar nền kính mờ */}
      <div className="backdrop-blur supports-[backdrop-filter]:bg-emerald-600/90 bg-emerald-600 border-b border-white/10">
        <Navbar
          linkClass={linkClass}
          closeMenu={closeMenu}
          rightSlot={
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden inline-grid place-items-center h-9 w-9 rounded-md text-white hover:bg-white/10 transition"
            >
              ☰
            </button>
          }
        />
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden bg-emerald-700/95 text-white flex flex-col gap-1 px-3 py-3 shadow-lg animate-[fadeIn_.15s_ease]">
          {[
            { to: "/", label: "Trang chủ", end: true },
            { to: "/gioi-thieu", label: "Giới thiệu" },
            { to: "/san-pham", label: "Sản phẩm" },
            { to: "/tu-van-thiet-ke", label: "Tư vấn thiết kế" },
            { to: "/thu-vien", label: "Thư viện" },
            { to: "/tuyen-dung", label: "Tuyển dụng" },
            { to: "/tin-tuc", label: "Tin tức" },
            { to: "/lien-he", label: "Liên hệ" },
          ].map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
                end={it.end}
                className={({ isActive }) =>
                  "block rounded-md px-3 py-2 text-[14px] transition-colors " +
                  (isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300")
                }
                onClick={closeMenu}
              >
                {it.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
