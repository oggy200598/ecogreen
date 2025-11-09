import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cats = [
  { img: "/cat/ly-giay.jpg",      title: "Ly giấy",                    to: "/san-pham/ly-giay" },
  { img: "/cat/to-giay.jpg",      title: "Tô/Chén giấy",               to: "/san-pham/to-chen-giay" },
  { img: "/cat/ong-hut-giay.jpg", title: "Ống hút giấy",               to: "/san-pham/ong-hut-giay" },
  { img: "/cat/tui-kraft.jpg",    title: "Túi giấy Kraft",             to: "/san-pham/tui-giay-kraft" },
  { img: "/cat/hop-thuc-an.jpg",  title: "Hộp giấy đựng thức ăn",      to: "/san-pham/hop-giay-thuc-an" },
  { img: "/cat/hop-qua.jpg",      title: "Hộp quà/Hộp bánh",           to: "/san-pham/hop-qua-giay" },
  { img: "/cat/thung-carton.jpg", title: "Thùng carton",               to: "/san-pham/thung-carton" },
  { img: "/cat/hop-carton.jpg",   title: "Hộp carton",                 to: "/san-pham/hop-carton" },
  { img: "/cat/giay-cuon.jpg",    title: "Giấy cuộn Kraft & Lõi giấy", to: "/san-pham/giay-cuon-kraft" },
  { img: "/cat/phong-bi.jpg",     title: "Phong bì/Túi hồ sơ",         to: "/san-pham/phong-bi-giay" },
  { img: "/cat/so-tay.jpg",       title: "Sổ tay giấy tái chế",        to: "/san-pham/so-tay-giay" },
];

const PAGE_SIZE_DESKTOP = 6;
const STEP = 6;

export default function CategoryCarousel() {
  const [start, setStart] = useState(0);
 
  const visible = useMemo(() => {
    const res = [];
    for (let i = 0; i < PAGE_SIZE_DESKTOP; i++) {
      res.push(cats[(start + i) % cats.length]);
    }
    return res;
  }, [start]);

  const go = (direction) => {
    setStart((prev) => {
      const next = (prev + (direction === "right" ? STEP : -STEP)) % cats.length;
      return next < 0 ? next + cats.length : next;
    });
  };

  return (
    <section className="py-12 px-6 bg-gray-50 relative">
      <h3 className="text-2xl font-bold text-center mb-8">Danh mục sản phẩm</h3>

      <div className="relative mx-auto w-full max-w-[1320px]">
        {/* nút trái */}
        <button
          onClick={() => go("left")}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-emerald-600 text-white p-2 rounded-full shadow hover:bg-emerald-700 active:scale-95 transition"
        >
          <ChevronLeft size={20} />
        </button>
        {/* nút phải */}
        <button
          onClick={() => go("right")}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-emerald-600 text-white p-2 rounded-full shadow hover:bg-emerald-700 active:scale-95 transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* lưới sản phẩm */}
        <div className="overflow-hidden px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {visible.map((c, i) => (
              <Link
                key={`${c.to}-${i}`}
                to={c.to}
                className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition flex flex-col"
              >
                <div className="aspect-4/3 bg-gray-100 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                    onError={(e) => { e.currentTarget.src = "/cat/placeholder.jpg"; }}
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center text-white bg-emerald-600 group-hover:bg-emerald-700 transition">
                  <p className="font-semibold truncate">{c.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
