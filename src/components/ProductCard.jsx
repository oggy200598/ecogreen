export default function ProductCard({ title, description, price, image }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition p-0 overflow-hidden">
      {image && (
        <div className="aspect-4/3 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-[1.03] transition"
          />
        </div>
      )}
      <div className="p-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-1 text-gray-600">{description}</p>
        <p className="mt-3 font-semibold text-green-600">{price}</p>
      </div>
    </div>
  );
}
