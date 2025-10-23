// src/pages/Home.jsx
import SEO from "@/components/SEO";             // 👈 thêm
import Hero from "../components/Hero";
import IntroSplit from "../components/IntroSplit";
import ServicesStrip from "../components/ServicesStrip";
import PartnersMarquee from "../components/PartnersMarquee";
import WhyUs from "../components/WhyUs";
import NewsPreview from "../components/NewsPreview";
import CTAQuote from "../components/CTAQuote";
import FloatingButtons from "../components/FloatingButtons";
import SubHero from "../components/SubHero";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* SEO cho trang chủ */}
      <SEO
        title="EcoGreen Packaging | Giải pháp bao bì giấy thân thiện môi trường"
        description="Hơn 10 năm kinh nghiệm, thiết kế miễn phí, giao hàng toàn quốc. Bao bì giấy chất lượng cao cho doanh nghiệp tại Việt Nam."
        canonical="/"
        image="/hero-bg.jpg"
        jsonLd={{
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"EcoGreen Packaging",
          "url":"https://ecogreen.vn",
          "logo":"https://ecogreen.vn/logo.png",
          "contactPoint":[{"@type":"ContactPoint","telephone":"+84-938466982","contactType":"customer service","areaServed":"VN","availableLanguage":"Vietnamese"}],
          "address":{"@type":"PostalAddress","streetAddress":"143/2 Nguyễn Trãi, P2, Q5","addressLocality":"Hồ Chí Minh","addressCountry":"VN"}
        }}
      />

      {/* Nền trang (nên dùng .webp) */}
      <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-white/95" />

      <div className="relative z-10">
        <Hero />                 {/* đảm bảo trong Hero có 1 <h1> duy nhất */}
        <ServicesStrip />
        <IntroSplit />
        <PartnersMarquee />

      
        <SubHero />
        <section className="py-12 px-6">
          <div className="mx-auto max-w-6xl rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur p-6 shadow-lg">
            <NewsPreview />
          </div>
        </section>

        <CTAQuote />
        <WhyUs />
        <FloatingButtons />
      </div>
    </div>
  );
}
