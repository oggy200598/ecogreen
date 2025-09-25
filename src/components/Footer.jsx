export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 EcoGreen • Packaging from paper ♻️</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://zalo.me" target="_blank" rel="noreferrer">Zalo</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
