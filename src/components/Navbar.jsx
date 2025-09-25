import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ linkClass, rightSlot }) {
  const [open, setOpen] = useState(false);
  const [openSanPham, setOpenSanPham] = useState(false);
  const [openThuVien, setOpenThuVien] = useState(false);
  const [openTinTuc, setOpenTinTuc] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setOpenSanPham(false);
    setOpenThuVien(false);
    setOpenTinTuc(false);
  };

  const base = "px-3 py-2 text-white/90 hover:text-white";
  const item = (isActive) =>
    `${linkClass ?? base} ${isActive ? "text-white font-semibold" : ""}`;

  return (
    <div className="relative z-[200] isolate bg-green-600 text-white backdrop-blur supports-[backdrop-filter]:bg-green-600/90">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10" />
          <span className="text-lg font-bold">EcoGreen</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-2">
          <li>
            <NavLink to="/" end className={({ isActive }) => item(isActive)}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gioi-thieu"
              className={({ isActive }) => item(isActive)}
            >
              Giới thiệu
            </NavLink>
          </li>

          {/* Sản phẩm */}
          <li className="relative group">
            <NavLink to="/san-pham" className={({ isActive }) => item(isActive)}>
              Sản phẩm ▾
            </NavLink>
            <div className="absolute left-0 top-full hidden group-hover:block bg-green-700 text-white shadow-md min-w-48 z-50">
              <NavLink
                to="/san-pham/loai-a"
                className="block px-4 py-2 text-sm hover:bg-green-500"
                onClick={closeMenu}
              >
                Loại A
              </NavLink>
              <NavLink
                to="/san-pham/loai-b"
                className="block px-4 py-2 text-sm hover:bg-green-500"
                onClick={closeMenu}
              >
                Loại B
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              to="/tu-van-thiet-ke"
              className={({ isActive }) => item(isActive)}
            >
              Tư vấn thiết kế
            </NavLink>
          </li>

          {/* Thư viện */}
          <li className="relative group">
            <NavLink to="/thu-vien" className={({ isActive }) => item(isActive)}>
              Thư viện ▾
            </NavLink>
            <div className="absolute left-0 top-full hidden group-hover:block bg-green-700 text-white shadow-md min-w-48 z-50">
              <NavLink
                to="/thu-vien/hinh-anh"
                className="block px-4 py-2 text-sm hover:bg-green-500"
                onClick={closeMenu}
              >
                Hình ảnh
              </NavLink>
              <NavLink
                to="/thu-vien/video"
                className="block px-4 py-2 text-sm hover:bg-green-500"
                onClick={closeMenu}
              >
                Video
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              to="/tuyen-dung"
              className={({ isActive }) => item(isActive)}
            >
              Tuyển dụng
            </NavLink>
          </li>

          {/* Tin tức */}
          <li className="relative group">
            <NavLink to="/tin-tuc" className={({ isActive }) => item(isActive)}>
              Tin tức ▾
            </NavLink>
            <div className="absolute left-0 top-full hidden group-hover:block bg-green-700 text-white shadow-md min-w-56 z-50">
              <NavLink
                to="/tin-tuc/1"
                className="block px-4 py-2 text-sm hover:bg-green-500"
                onClick={closeMenu}
              >
                Bài viết 1
              </NavLink>
              <NavLink
                to="/tin-tuc/2"
                className="block px-4 py-2 text-sm hover:bg-green-500"
                onClick={closeMenu}
              >
                Bài viết 2
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              to="/lien-he"
              className={({ isActive }) => item(isActive)}
            >
              Liên hệ
            </NavLink>
          </li>
        </ul>

        {/* Burger mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {rightSlot}
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-green-700 text-white flex flex-col md:hidden">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className="px-4 py-3 hover:bg-green-500"
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/gioi-thieu"
            onClick={closeMenu}
            className="px-4 py-3 hover:bg-green-500"
          >
            Giới thiệu
          </NavLink>

          {/* Sản phẩm mobile */}
          <button
            onClick={() => setOpenSanPham((v) => !v)}
            className="px-4 py-3 text-left hover:bg-green-500 flex justify-between"
          >
            Sản phẩm <span>{openSanPham ? "▲" : "▼"}</span>
          </button>
          {openSanPham && (
            <div className="flex flex-col bg-green-800">
              <NavLink
                to="/san-pham/loai-a"
                onClick={closeMenu}
                className="px-6 py-2 hover:bg-green-500"
              >
                • Loại A
              </NavLink>
              <NavLink
                to="/san-pham/loai-b"
                onClick={closeMenu}
                className="px-6 py-2 hover:bg-green-500"
              >
                • Loại B
              </NavLink>
            </div>
          )}

          <NavLink
            to="/tu-van-thiet-ke"
            onClick={closeMenu}
            className="px-4 py-3 hover:bg-green-500"
          >
            Tư vấn thiết kế
          </NavLink>

          {/* Thư viện mobile */}
          <button
            onClick={() => setOpenThuVien((v) => !v)}
            className="px-4 py-3 text-left hover:bg-green-500 flex justify-between"
          >
            Thư viện <span>{openThuVien ? "▲" : "▼"}</span>
          </button>
          {openThuVien && (
            <div className="flex flex-col bg-green-800">
              <NavLink
                to="/thu-vien/hinh-anh"
                onClick={closeMenu}
                className="px-6 py-2 hover:bg-green-500"
              >
                • Hình ảnh
              </NavLink>
              <NavLink
                to="/thu-vien/video"
                onClick={closeMenu}
                className="px-6 py-2 hover:bg-green-500"
              >
                • Video
              </NavLink>
            </div>
          )}

          <NavLink
            to="/tuyen-dung"
            onClick={closeMenu}
            className="px-4 py-3 hover:bg-green-500"
          >
            Tuyển dụng
          </NavLink>

          {/* Tin tức mobile */}
          <button
            onClick={() => setOpenTinTuc((v) => !v)}
            className="px-4 py-3 text-left hover:bg-green-500 flex justify-between"
          >
            Tin tức <span>{openTinTuc ? "▲" : "▼"}</span>
          </button>
          {openTinTuc && (
            <div className="flex flex-col bg-green-800">
              <NavLink
                to="/tin-tuc/1"
                onClick={closeMenu}
                className="px-6 py-2 hover:bg-green-500"
              >
                • Bài viết 1
              </NavLink>
              <NavLink
                to="/tin-tuc/2"
                onClick={closeMenu}
                className="px-6 py-2 hover:bg-green-500"
              >
                • Bài viết 2
              </NavLink>
            </div>
          )}

          <NavLink
            to="/lien-he"
            onClick={closeMenu}
            className="px-4 py-3 hover:bg-green-500"
          >
            Liên hệ
          </NavLink>
        </div>
      )}
    </div>
  );
}
