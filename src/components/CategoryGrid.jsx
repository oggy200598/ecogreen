import { useState } from "react";
import { Link } from "react-router-dom";

const cats = [
  { img: "/cat/ly-giay.jpg",        title: "Ly giấy",                      to: "/san-pham/ly-giay" },
  { img: "/cat/to-giay.jpg",        title: "Tô/Chén giấy",                 to: "/san-pham/to-chen-giay" },
  { img: "/cat/ong-hut-giay.jpg",   title: "Ống hút giấy",                 to: "/san-pham/ong-hut-giay" },
  { img: "/cat/tui-kraft.jpg",      title: "Túi giấy Kraft",               to: "/san-pham/tui-giay-kraft" },
  { img: "/cat/hop-thuc-an.jpg",    title: "Hộp giấy đựng thức ăn",        to: "/san-pham/hop-giay-thuc-an" },
  { img: "/cat/hop-qua.jpg",        title: "Hộp quà/Hộp bánh",             to: "/san-pham/hop-qua-giay" },
  { img: "/cat/thung-carton.jpg",   title: "Thùng carton",                 to: "/san-pham/thung-carton" },
  { img: "/cat/hop-carton.jpg",     title: "Hộp carton",                   to: "/san-pham/hop-carton" },
  { img: "/cat/giay-cuon.jpg",      title: "Giấy cuộn Kraft & Lõi giấy",   to: "/san-pham/giay-cuon-kraft" },
  { img: "/cat/phong-bi.jpg",       title: "Phong bì/Túi hồ sơ",           to: "/san-pham/phong-bi-giay" },
  { img: "/cat/so-tay.jpg",         title: "Sổ tay giấy tái chế",          to: "/san-pham/so-tay-giay" },
];

export default function CategoryGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? cats : cats.slice(0, 4);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h3 className="text-2xl font-bold text-center mb-8">Danh mục sản phẩm</h3>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visible.map((c, i) => (
          <Link
            key={i}
            to={c.to}
            className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover group-hover:scale-105 transition"
                onError={(e) => { e.currentTarget.src = "/cat/placeholder.jpg"; }}
                loading="lazy"
              />
            </div>
            <div className="p-3 text-center text-white bg-green-600 group-hover:bg-green-700 transition">
              <p className="font-semibold truncate">{c.title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Nút xem thêm / thu gọn */}
      {cats.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            aria-expanded={showAll}
          >
            {showAll ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      )}
    </section>
  );
}
