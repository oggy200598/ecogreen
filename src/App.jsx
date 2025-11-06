import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GioiThieu from "./pages/GioiThieu";
import Products from "./pages/Products";
import TuVanThietKe from "./pages/TuVanThietKe";
import ThuVien from "./pages/ThuVien";
import HinhAnh from "./pages/thu-vien/HinhAnh";
import Video from "./pages/thu-vien/Video";
import TuyenDung from "./pages/TuyenDung";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO";
import Sustainability from "./pages/Sustainability";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <Navbar />
      <Routes>
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/tu-van-thiet-ke" element={<TuVanThietKe />} />
        <Route path="/thu-vien" element={<ThuVien />} />
        <Route path="/thu-vien/hinh-anh" element={<HinhAnh />} />
        <Route path="/thu-vien/video" element={<Video />} />
        <Route path="/tuyen-dung" element={<TuyenDung />} />
        <Route path="/tin-tuc" element={<NewsList />} />
        <Route path="/tin-tuc/:id" element={<NewsDetail />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
 }
