// src/pages/Home.jsx
import Hero from "../components/Hero";
import IntroSplit from "../components/IntroSplit";
import ServicesStrip from "../components/ServicesStrip";
import PartnersMarquee from "../components/PartnersMarquee";
import ProductTeaser from "../components/ProductTeaser"; // <-- dùng teaser giống ảnh mẫu
import WhyUs from "../components/WhyUs";
import NewsPreview from "../components/NewsPreview";
import CTAQuote from "../components/CTAQuote";
import FloatingButtons from "../components/FloatingButtons";
import SubHero from "../components/SubHero";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Nền trang */}
    <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center"></div> 
    <div className="absolute inset-0 bg-white/97"></div>

      <div className="relative z-10">
        {/* 1) Hero */}
        <Hero />

        {/* 2) Strip dịch vụ */}
        <ServicesStrip />

        {/* 3) Intro 2 cột (giới thiệu ngắn + CTA) */}
        <IntroSplit />

        {/* 4) Dải logo đối tác */}
        <PartnersMarquee />

        {/* 5) Khối sản phẩm kiểu “teaser” (giống screenshot bạn gửi) */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-6xl rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur p-6 shadow-lg">
            {/* Kicker + tiêu đề trái */}
            <p className="text-[12px] font-semibold tracking-[0.18em] text-emerald-700 uppercase">
              Những gì chúng tôi cung cấp
            </p>
            <h2 className="mt-2 mb-8 text-3xl md:text-[34px] leading-tight font-bold text-emerald-900">
              Các sản phẩm và dịch vụ bền vững thúc đẩy doanh nghiệp của bạn phát triển
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <ProductTeaser
                to="/san-pham/bot-giay"
                image="/products/bot-giay.jpg"
                title="Bột giấy"
                description="Bột giấy bền vững và các loại bột giấy đặc biệt được làm từ nguồn tài nguyên tái tạo."
              />
              <ProductTeaser
                to="/san-pham/giay"
                image="/products/giay.jpg"
                title="Giấy"
                description="Từ bìa cứng đến giấy kraft bão hòa, các loại giấy chuyên dụng phục vụ sản xuất công nghiệp."
              />
              <ProductTeaser
                to="/san-pham/spacekraft"
                image="/products/spacekraft.jpg"
                title="SpaceKraft®"
                description="Giải pháp đóng gói số lượng lớn, tiết kiệm chi phí và bền vững cho vận chuyển chất lỏng."
              />
            </div>
          </div>
        </section>

        {/* 6) Vì sao chọn EcoGreen */}
        
        <SubHero />
        {/* 7) Tin tức */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-6xl rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur p-6 shadow-lg">
            <NewsPreview />
          </div>
        </section>

        {/* 8) CTA cuối trang */}
        <CTAQuote />
        <WhyUs />
        {/* 9) Nút nổi */}
        <FloatingButtons />
      </div>
    </div>
  );
}
