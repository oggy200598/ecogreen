import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-emerald-50 to-white px-6">
      <div className="text-center max-w-lg">
        {/* Số 404 nổi bật */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-emerald-600 drop-shadow-sm">
          404
        </h1>

        {/* Tiêu đề phụ */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Oops! Trang không tồn tại 🚧
        </h2>

        {/* Mô tả */}
        <p className="mt-3 text-gray-600">
          Có thể đường dẫn đã bị thay đổi hoặc trang này chưa được cập nhật.  
          Hãy quay về trang chủ để tiếp tục nhé.
        </p>

        {/* Nút quay lại */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 hover:scale-105 transition-transform"
          >
            ⬅️ Về trang chủ
          </Link>
        </div>
      </div>
    </section>
  );
}
