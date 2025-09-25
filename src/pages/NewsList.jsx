// src/pages/NewsList.jsx
import NewsPreview from "../components/NewsPreview";

export default function NewsList() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Tin tức & Kiến thức</h1>
      <NewsPreview />
    </div>
  );
}
