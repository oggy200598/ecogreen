import { Mail, Phone, MapPin, Briefcase, Headphones } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-24 px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Form liên hệ */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
            Liên hệ với EcoGreen
          </h1>

          <form className="space-y-6">
            {/* Họ tên + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="ban@example.com"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="block text-sm font-medium mb-2">Số điện thoại</label>
              <input
                type="tel"
                placeholder="09xx xxx xxx"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Nội dung */}
            <div>
              <label className="block text-sm font-medium mb-2">Nội dung</label>
              <textarea
                rows="5"
                placeholder="Bạn cần hỗ trợ, báo giá hay hợp tác?"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* Gửi */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
            >
              Gửi yêu cầu
            </button>
          </form>
        </div>

        {/* Thông tin liên hệ */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-green-700">Thông tin công ty</h2>
          <p className="text-gray-600">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn — từ tư vấn sản phẩm đến hợp tác kinh doanh.
          </p>

          {/* Liên hệ */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" size={20} />
              <span className="text-gray-700">Hotline: 0908 350 280</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-green-600" size={20} />
              <span className="text-gray-700">143/2 Nguyễn Trãi, P2, Q5, HCM</span>
            </div>
          </div>

          {/* Email chia theo bộ phận */}
          <div className="mt-6 space-y-3">
            <h3 className="font-semibold text-green-700 mb-2">Email bộ phận:</h3>
            <div className="flex items-center gap-3">
              <Mail className="text-green-600" size={20} />
              <span className="text-gray-700"> info@ecogreen.vn — Thông tin chung</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="text-green-600" size={20} />
              <span className="text-gray-700"> sales@ecogreen.vn — Báo giá & Hợp tác</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="text-green-600" size={20} />
              <span className="text-gray-700"> support@ecogreen.vn — Hỗ trợ khách hàng</span>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              title="EcoGreen Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7015477826667!2d106.67650747468596!3d10.757469159543813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f02d5a9ec2d%3A0x8e1940be4ce6fb24!2zMTQzIE5ndXnhu4VuIFRyw6NpLCBQaMaw4budbmcgMiwgUXXhuq1uIDUsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1758867815650!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
