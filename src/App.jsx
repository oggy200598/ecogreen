// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiCheck from "./pages/ApiCheck";
// thêm import mới
import NewsList from "./pages/NewsList";       // danh sách tin
import NewsDetail from "./pages/NewsDetail";  // chi tiết tin

export default function App(){
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          {/* Route mới cho Tin tức */}
          <Route path="/tin-tuc" element={<NewsList />} />
          <Route path="/tin-tuc/:slug" element={<NewsDetail />} />

          <Route path="/api-check" element={<ApiCheck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
