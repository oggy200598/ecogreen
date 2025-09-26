// src/pages/Contact.jsx
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Form bên trái */}
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
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="block text-sm font-medium mb-2">Số điện thoại</label>
              <input
                type="tel"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                placeholder="09xx xxx xxx"
              />
            </div>

            {/* Nội dung */}
            <div>
              <label className="block text-sm font-medium mb-2">Nội dung</label>
              <textarea
                rows="5"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Bạn cần gì từ EcoGreen?"
              ></textarea>
            </div>

            {/* Nút gửi */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
              >
                Gửi yêu cầu
              </button>
            </div>
          </form>
        </div>

        {/* Thông tin + Bản đồ bên phải */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-700">Thông tin liên hệ</h2>
          <p className="text-gray-600">
            Hãy kết nối với EcoGreen để được hỗ trợ nhanh chóng và tận tâm.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" size={20} />
              <span className="text-gray-700">Hotline: 09xx xxx xxx</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-600" size={20} />
              <span className="text-gray-700">Email: hello@ecogreen.vn</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-green-600" size={20} />
              <span className="text-gray-700">
                143/2 Nguyễn Trãi, P2, Q5, HCM
              </span>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-6">
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
    </div>
  );
}
