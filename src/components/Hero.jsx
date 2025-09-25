// src/components/Hero.jsx
export default function Hero(){
  return (
    <section
      className="relative h-[420px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:"url('/hero-bg.jpg')",   // <-- có dấu "/" đầu
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold">EcoGreen Packaging 🌱</h1>
        <p className="mt-4 text-lg">Bao bì từ giấy – Giải pháp sống xanh và bảo vệ môi trường</p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}
