import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug); // ✅ tìm theo slug
  const [quantity, setQuantity] = useState(100);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });

  if (!product)
    return (
      <div className="pt-24 text-center text-gray-600">
        Không tìm thấy sản phẩm.
        <Link to="/san-pham" className="text-green-600 underline ml-1">
          Quay lại
        </Link>
      </div>
    );

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      setMessage("⚠️ Vui lòng điền đầy đủ thông tin trước khi đặt hàng!");
      return;
    }
    setMessage(
      `✅ Cảm ơn ${form.name}! Đơn hàng ${quantity} ${product.title} đã được ghi nhận.`
    );
    setForm({ name: "", phone: "", address: "", note: "" });
    setQuantity(100);
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <div className="pt-24 bg-linear-to-b from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-green-600">Trang chủ</Link> /{" "}
        <Link to="/san-pham" className="hover:text-green-600">Sản phẩm</Link> /{" "}
        <span className="text-green-700 font-medium">{product.title}</span>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-start">
        {/* Hình sản phẩm */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg w-full object-contain max-h-[480px] hover:scale-[1.02] transition-transform"
          />
        </div>

        {/* Form đặt hàng */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-green-700 mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
          <div className="text-2xl font-semibold text-green-600 mb-6">{product.price}</div>

          {/* Số lượng */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 font-medium">Số lượng:</span>
            <div className="flex items-center border rounded-lg bg-gray-50">
              <button
                onClick={() => setQuantity((q) => Math.max(100, q - 100))}
                className="px-3 py-1 text-lg hover:bg-gray-100"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(100, Number(e.target.value) || 100))
                }
                min="100"
                step="100"
                className="w-20 text-center border-l border-r outline-none py-1 text-gray-700 bg-white"
              />
              <button
                onClick={() => setQuantity((q) => q + 100)}
                className="px-3 py-1 text-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Form */}
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Thông tin đặt hàng
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Họ và tên *"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Số điện thoại *"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Địa chỉ nhận hàng *"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Ghi chú (tuỳ chọn)"
              rows="3"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              🛒 Gửi đơn hàng
            </button>
          </form>

          {message && (
            <div className="mt-4 text-green-700 bg-green-100 px-4 py-2 rounded-lg shadow-sm text-sm animate-fade">
              {message}
            </div>
          )}

          <Link
            to="/san-pham"
            className="block mt-6 text-green-600 hover:underline text-sm"
          >
            ← Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      {related.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Sản phẩm cùng loại 🌿
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/san-pham/${r.slug}`} // ✅ dùng slug thay vì index
                className="block bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-40 w-full object-contain mb-3"
                />
                <h3 className="font-semibold text-gray-800">{r.title}</h3>
                <p className="text-green-600 font-medium">{r.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fade 0.4s ease-out; }
      `}</style>
    </div>
  );
}
