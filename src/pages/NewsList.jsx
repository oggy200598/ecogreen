import NewsPreview from "../components/NewsPreview";

export default function NewsList() {
  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-10">
          Tin tức & Kiến thức 🌿
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Cập nhật những xu hướng thiết kế bao bì, công nghệ in ấn và mẹo bảo vệ môi trường cùng EcoGreen.
        </p>

        <NewsPreview />
      </div>
    </main>
  );
}
