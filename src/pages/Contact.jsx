export default function Contact(){
  return(
    <div className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Liên hệ</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Họ và tên</label>
          <input className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500" placeholder="Nguyễn Văn A"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nội dung</label>
          <textarea rows="5" className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500" placeholder="Bạn cần gì từ EcoGreen?"></textarea>
        </div>
        <button type="button" className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Gửi</button>
      </form>
      <div className="mt-8 text-gray-700">
        <p>Hotline: 09xx xxx xxx</p>
        <p>Email: hello@ecogreen.vn</p>
        <p>Địa chỉ: 143/2 Nguyễn Trãi, P2, Q5, HCM</p>
      </div>
    </div>
  );
}
