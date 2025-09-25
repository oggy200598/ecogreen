import { Outlet, NavLink } from "react-router-dom";

export default function ThuVien() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-emerald-600 mb-4">Thư viện</h1>

      <nav className="flex gap-3 mb-6">
        <NavLink to="hinh-anh" className="text-emerald-600 hover:underline">
          Hình ảnh
        </NavLink>
        <NavLink to="video" className="text-emerald-600 hover:underline">
          Video
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
