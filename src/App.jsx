// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages cấp 1
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Sản phẩm
import Products from "./pages/Products";          // trang danh mục /products
import TypeA from "./pages/products/TypeA";       // /products/type-a
import TypeB from "./pages/products/TypeB";       // /products/type-b

// Tư vấn thiết kế
import TuVanThietKe from "./pages/TuVanThietKe";  // /tu-van-thiet-ke

// Thư viện
import ThuVien from "./pages/ThuVien";            // wrapper có <Outlet/>
import HinhAnh from "./pages/thu-vien/HinhAnh";   // /thu-vien/hinh-anh
import Video from "./pages/thu-vien/Video";       // /thu-vien/video

// Tuyển dụng
import TuyenDung from "./pages/TuyenDung";        // /tuyen-dung

// Tin tức
import NewsList from "./pages/NewsList";          // /tin-tuc
import NewsDetail from "./pages/NewsDetail";      // /tin-tuc/:slug

// Khác (nếu cần)
import ApiCheck from "./pages/ApiCheck";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main className="pt-0">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Products + nested */}
          <Route path="/products" element={<Products />}>
            <Route path="type-a" element={<TypeA />} />
            <Route path="type-b" element={<TypeB />} />
          </Route>

          {/* Tư vấn thiết kế */}
          <Route path="/tu-van-thiet-ke" element={<TuVanThietKe />} />

          {/* Thư viện + nested */}
          <Route path="/thu-vien" element={<ThuVien />}>
            <Route path="hinh-anh" element={<HinhAnh />} />
            <Route path="video" element={<Video />} />
          </Route>

          {/* Tuyển dụng */}
          <Route path="/tuyen-dung" element={<TuyenDung />} />

          {/* Tin tức */}
          <Route path="/tin-tuc" element={<NewsList />} />
          <Route path="/tin-tuc/:slug" element={<NewsDetail />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Khác */}
          <Route path="/api-check" element={<ApiCheck />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
