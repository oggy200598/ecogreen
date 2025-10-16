// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Loader nhỏ khi chờ tải chunk
function Loader() {
  return <div style={{padding:"40px 0", textAlign:"center"}}>Loading…</div>;
}

// ===== Lazy pages =====
const Home         = lazy(()=>import("./pages/Home"));
const About        = lazy(()=>import("./pages/About"));
const Contact      = lazy(()=>import("./pages/Contact"));
const NotFound     = lazy(()=>import("./pages/NotFound"));

const Products     = lazy(()=>import("./pages/Products"));
const TypeA        = lazy(()=>import("./pages/products/TypeA"));
const TypeB        = lazy(()=>import("./pages/products/TypeB"));

const TuVanThietKe = lazy(()=>import("./pages/TuVanThietKe"));

const ThuVien      = lazy(()=>import("./pages/ThuVien"));
const HinhAnh      = lazy(()=>import("./pages/thu-vien/HinhAnh"));
const Video        = lazy(()=>import("./pages/thu-vien/Video"));

const TuyenDung    = lazy(()=>import("./pages/TuyenDung"));

const NewsList     = lazy(()=>import("./pages/NewsList"));
const NewsDetail   = lazy(()=>import("./pages/NewsDetail"));

const ApiCheck     = lazy(()=>import("./pages/ApiCheck"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main className="pt-0">
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
