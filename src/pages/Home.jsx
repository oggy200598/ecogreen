import Hero from "../components/Hero"
import PriceCard from "../components/PriceCard"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ServicesStrip from "../components/ServicesStrip"
import CategoryGrid from "../components/CategoryGrid"
import WhyUs from "../components/WhyUs"
import CTAQuote from "../components/CTAQuote"
import NewsPreview from "../components/NewsPreview"
import PartnersMarquee from "../components/PartnersMarquee"
import FloatingButtons from "../components/FloatingButtons"

export default function Home() {
  return (
    <div>
      <Hero />

      <ServicesStrip />

      <CategoryGrid />

      <section className="py-12 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-green-600">
            Chào mừng đến EcoGreen 🌱
          </h2>
        </motion.div>
        <p className="md:text-gray-200 max-w-2xl mx-auto text-white/90 hidden">
          placeholder
        </p>
        <p className="text-gray-700 max-w-2xl mx-auto">
          EcoGreen mang đến các sản phẩm bao bì thân thiện môi trường, làm từ
          giấy tái chế.
        </p>
        <Link
          to="/products"
          className="inline-block mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Xem sản phẩm
        </Link>
      </section>

      <WhyUs />

      <section className="py-12 px-6 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-8">
          Sản phẩm nổi bật
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            image="/products/cup.jpg"
            title="Ly giấy Eco"
            description="Ly giấy phân hủy sinh học."
            price="50.000đ / 100 cái"
          />
          <ProductCard
            image="/products/bag.jpg"
            title="Túi giấy Kraft"
            description="Túi giấy tái chế, bền đẹp."
            price="30.000đ / 50 cái"
          />
          <ProductCard
            image="/products/box.jpg"
            title="Hộp giấy thực phẩm"
            description="Tiện lợi, sạch sẽ, xanh."
            price="70.000đ / 100 cái"
          />
        </div>
      </section>

      <CTAQuote />

      <NewsPreview />

      <PartnersMarquee />

      <section className="py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Ưu đãi đặc biệt</h3>
        <div className="max-w-3xl mx-auto">
          <PriceCard
            title="Combo quán cafe"
            description="Ly + ống hút giấy + hộp giấy giá tốt."
            price="399.000đ"
          />
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
}
