import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItemClass =
    "block py-2 px-4 text-white hover:text-yellow-200 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300"

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-green-600 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white hover:text-yellow-200 transition-colors"
          onClick={closeMenu}
        >
          EcoGreen
        </NavLink>

        {/* Nút toggle mobile */}
        <button
          className="md:hidden text-white hover:text-yellow-200"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menu */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-emerald-600 md:bg-transparent md:flex md:space-x-6 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 md:opacity-100 md:translate-y-0 hidden md:flex"
          }`}
        >
          <li><NavLink to="/" className={navItemClass} onClick={closeMenu}>Trang chủ</NavLink></li>
          <li><NavLink to="/gioi-thieu" className={navItemClass} onClick={closeMenu}>Giới thiệu</NavLink></li>
          <li><NavLink to="/san-pham" className={navItemClass} onClick={closeMenu}>Sản phẩm</NavLink></li>
          <li><NavLink to="/tu-van-thiet-ke" className={navItemClass} onClick={closeMenu}>Tư vấn thiết kế</NavLink></li>
          <li><NavLink to="/thu-vien" className={navItemClass} onClick={closeMenu}>Thư viện</NavLink></li>
          <li><NavLink to="/tuyen-dung" className={navItemClass} onClick={closeMenu}>Tuyển dụng</NavLink></li>
          <li><NavLink to="/tin-tuc" className={navItemClass} onClick={closeMenu}>Tin tức</NavLink></li>
          <li><NavLink to="/lien-he" className={navItemClass} onClick={closeMenu}>Liên hệ</NavLink></li>
        </ul>
      </div>  
    </nav>
  )
}
