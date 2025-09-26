// src/pages/Products.jsx
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";
import { Filter } from "lucide-react";

export default function Products() {
  const demo = [
    {
      title: "Ly giấy Eco",
      description: "Phân hủy sinh học.",
      price: "50.000đ / 100 cái",
      image: "/products/cup.jpg",
    },
    {
      title: "Túi giấy Kraft",
      description: "Tái chế, bền đẹp.",
      price: "30.000đ / 50 cái",
      image: "/products/bag.jpg",
    },
    {
      title: "Hộp giấy đựng thức ăn",
      description: "Tiện lợi, sạch sẽ.",
      price: "70.000đ / 100 cái",
      image: "/products/box.jpg",
    },
  ];

  const base =
    Array.isArray(productsData) && productsData.length ? productsData : demo;

  const products = base.map((p, i) => ({
    title: p.title || p.name || "Sản phẩm",
    description: p.description || "",
    price: p.price || "",
    image: p.image || demo[i]?.image || "/products/box.jpg", // fallback
  }));

  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          Danh mục sản phẩm 🌱
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Khám phá các dòng bao bì giấy thân thiện môi trường, an toàn cho sức
          khỏe và góp phần giảm rác thải nhựa.
        </p>
      </section>

      {/* Filter & Sort (demo) */}
      <div className="flex justify-end mb-6">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">
          <Filter size={16} /> Bộ lọc
        </button>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <div
            key={i}
            className="transform hover:scale-[1.02] transition-transform"
          >
            <ProductCard
              title={p.title}
              description={p.description}
              price={p.price}
              image={p.image}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="text-center mt-16 bg-gradient-to-r from-emerald-500 to-green-600 py-12 px-6 rounded-xl text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Bạn cần giải pháp bao bì riêng cho thương hiệu?
        </h2>
        <p className="mb-6 text-white/90">
          Liên hệ ngay với EcoGreen để được tư vấn và thiết kế theo yêu cầu.
        </p>
        <a
          href="/tu-van-thiet-ke"
          className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Tư vấn thiết kế
        </a>
      </section>
    </div>
  );
}
