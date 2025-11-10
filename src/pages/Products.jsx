// src/pages/Products.jsx
import { useState, useMemo } from "react";
import { Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Products() {
  const base = Array.isArray(productsData) && productsData.length ? productsData : [];
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Tất cả");

  const categories = ["Tất cả", ...new Set(base.map((p) => p.category || "Khác"))];

  const filtered = useMemo(() => {
    return base.filter((p) => {
      const matchCategory = filter === "Tất cả" || p.category === filter;
      const matchQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [base, filter, query]);

  return (
    <main className="bg-gray-50">
      {/* ✅ Hero Banner chỉ có ảnh */}
      <section className="relative w-full h-[40vh] md:h-[40vh] overflow-hidden">
        <motion.img
          src="/banner.jpg"
          alt="EcoGreen Packaging"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </section>

    

      {/* ✅ Nội dung sản phẩm */}
      <div className="px-6 pt-24 pb-20 space-y-20"> 

        {/* Danh mục sản phẩm */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6">
            Danh mục sản phẩm
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Khám phá các dòng bao bì giấy thân thiện môi trường, an toàn cho sức khỏe
            và góp phần giảm rác thải nhựa.
          </p>
        </motion.section>

        {/* Bộ lọc + tìm kiếm */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <Filter className="text-green-600" size={18} />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
            />
          </div>
        </motion.div>

        {/* Lưới sản phẩm */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {filtered.length > 0 ? (
            filtered.map((p, i) => (
              <Link
  key={p.slug}
  to={`/san-pham/${p.slug}`}
  className="transform hover:scale-[1.02] transition-transform duration-300"
>
  <ProductCard {...p} />
</Link>

            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Không tìm thấy sản phẩm nào.
            </p>
          )}
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center py-16 rounded-2xl bg-linear-to-rrom-emerald-500 to-green-600 text-white shadow-xl max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bạn cần giải pháp bao bì riêng cho thương hiệu?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-white/90 text-lg">
            Liên hệ ngay với EcoGreen để được tư vấn và thiết kế bao bì theo yêu cầu,
            giúp thương hiệu của bạn nổi bật và bền vững hơn.
          </p>
          <a
            href="/tu-van-thiet-ke"
            className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Tư vấn thiết kế
          </a>
        </motion.section>
      </div>
    </main>
  );
}
