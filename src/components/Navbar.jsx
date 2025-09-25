import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar({ isMobile, closeMenu }) {
  const items = [
    { to: "/", label: "Trang chủ", end: true },
    { to: "/about", label: "Giới thiệu" },
    {
      to: "/products",
      label: "Sản phẩm",
      children: [
        { to: "/products/type-a", label: "Loại A" },
        { to: "/products/type-b", label: "Loại B" },
      ],
    },
    { to: "/tu-van-thiet-ke", label: "Tư vấn thiết kế" },
    {
      to: "/thu-vien",
      label: "Thư viện",
      children: [
        { to: "/thu-vien/hinh-anh", label: "Hình ảnh" },
        { to: "/thu-vien/video", label: "Video" },
      ],
    },
    { to: "/tuyen-dung", label: "Tuyển dụng" },
    {
      to: "/tin-tuc",
      label: "Tin tức",
      children: [
        { to: "/tin-tuc/1", label: "Bài viết 1" },
        { to: "/tin-tuc/2", label: "Bài viết 2" },
      ],
    },
    { to: "/contact", label: "Liên hệ" },
  ];

  return isMobile
    ? <MobileMenu items={items} closeMenu={closeMenu} />
    : <DesktopMenu items={items} closeMenu={closeMenu} />;
}

/* ---------- Desktop ---------- */
function DesktopMenu({ items, closeMenu }) {
  const base =
    "whitespace-nowrap inline-flex items-center gap-1 rounded-md " +
    "px-3 md:px-2.5 lg:px-3 xl:px-4 py-2 " +
    "text-sm md:text-[14px] lg:text-[15px] transition-colors";

  const itemClass = ({ isActive }) =>
    isActive
       ? base + " text-emerald-400 font-semibold"
       : base + " text-white/90 hover:text-white hover:bg-white/10";

  return (
    <ul className="flex items-center gap-2 lg:gap-3 xl:gap-4 text-white">
      {items.map((it) => (
        <li key={it.to} className="relative group">
          <NavLink to={it.to} end={it.end} onClick={closeMenu} className={itemClass}>
            <span>{it.label}</span>
            {it.children && (
              <ChevronDown
                size={16}
                className="opacity-80 transition-transform duration-200 group-hover:rotate-180"
              />
            )}
          </NavLink>

          {/* Dropdown desktop — dùng wrapper pt-2 làm "cầu nối", không dùng mt-2 */}
          {it.children && (
            <div
              className="
                absolute left-0 top-full w-max pt-2
                opacity-0 invisible translate-y-1
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                transition-all duration-150 z-[500]
                pointer-events-none
              "
            >
              <div
                className="
                  pointer-events-auto rounded-xl bg-white/95 text-emerald-900 backdrop-blur
                  ring-1 ring-emerald-900/10 shadow-xl min-w-48 overflow-hidden
                "
                role="menu"
              >
                {it.children.map((sub) => (
                  <NavLink
                    key={sub.to}
                    to={sub.to}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-sm hover:bg-emerald-50 whitespace-nowrap"
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Mobile (Accordion) ---------- */
function MobileMenu({ items, closeMenu }) {
  const [open, setOpen] = useState(null);

  return (
    <ul className="text-white bg-emerald-700">
      {items.map((it, idx) => {
        const isOpen = open === idx;

        if (!it.children) {
          return (
            <li key={it.to} className="border-b border-white/10">
              <NavLink
                to={it.to}
                end={it.end}
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-emerald-600/40"
              >
                {it.label}
              </NavLink>
            </li>
          );
        }

        return (
          <li key={it.to} className="border-b border-white/10">
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-emerald-600/40"
              aria-expanded={isOpen}
            >
              <span className="font-medium">{it.label}</span>
              <ChevronDown
                size={18}
                className={"transition-transform " + (isOpen ? "rotate-180" : "")}
              />
            </button>

            <div
              className={
                "overflow-hidden transition-[max-height] duration-200 " +
                (isOpen ? "max-h-40" : "max-h-0")
              }
            >
              <div className="pl-6">
                {it.children.map((sub) => (
                  <NavLink
                    key={sub.to}
                    to={sub.to}
                    onClick={closeMenu}
                    className="block py-2 pr-4 hover:bg-emerald-600/40"
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
