export default function About() {
  return (
    <div className="px-6 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Về EcoGreen</h1>

      <p className="text-gray-700 max-w-3xl">
        EcoGreen tập trung vào giải pháp bao bì thân thiện môi trường làm từ
        giấy tái chế, giúp doanh nghiệp và người tiêu dùng giảm nhựa dùng một
        lần, hướng tới mô hình phát triển bền vững.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="rounded-xl p-6 text-center shadow bg-white">
          <div className="text-4xl font-extrabold text-green-600">+500</div>
          <div className="mt-2 text-gray-600">Khách hàng doanh nghiệp</div>
        </div>
        <div className="rounded-xl p-6 text-center shadow bg-white">
          <div className="text-4xl font-extrabold text-green-600">10 tấn</div>
          <div className="mt-2 text-gray-600">Nhựa giảm mỗi năm</div>
        </div>
        <div className="rounded-xl p-6 text-center shadow bg-white">
          <div className="text-4xl font-extrabold text-green-600">2019</div>
          <div className="mt-2 text-gray-600">Năm thành lập</div>
        </div>
      </div>

      {/* Mission */}
      <h2 className="text-2xl font-bold mt-12 mb-3 text-green-700">Sứ mệnh</h2>
      <p className="text-gray-700 max-w-3xl">
        Mang lại lựa chọn bao bì an toàn, đẹp, chi phí hợp lý và giảm tác động
        đến môi trường.
      </p>

      {/* Values */}
      <h2 className="text-2xl font-bold mt-10 mb-3 text-green-700">Giá trị</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 max-w-3xl">
        <li>Bền vững</li>
        <li>Chất lượng</li>
        <li>Minh bạch</li>
        <li>Đồng hành cùng khách hàng</li>
      </ul>
    </div>
  );
}
