import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProductTeaser({ to = "#", image, title, description }) {
  return (
    <article className="group">
      {/* Ảnh */}
      <Link to={to} className="block overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "/cat/placeholder.jpg")}
        />
      </Link>

      {/* Tiêu đề + mũi tên */}
      <div className="mt-4 flex items-center justify-between">
        <Link
          to={to}
          className="text-lg font-semibold text-emerald-900 hover:text-emerald-700 transition-colors"
        >
          {title}
        </Link>

        <Link
          to={to}
          aria-label={title}
          className="grid h-8 w-8 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 transition
                     group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Gạch chân mảnh */}
      <div className="mt-2 h-px bg-emerald-200" />

      {/* Mô tả */}
      {description && (
        <p className="mt-3 text-[15px] leading-6 text-slate-600">
          {description}
        </p>
      )}
    </article>
  );
}
