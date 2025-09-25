// src/pages/Products.jsx
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";

export default function Products(){
  const demo = [
    { title:"Ly giấy Eco", description:"Phân hủy sinh học.", price:"50.000đ / 100 cái", image:"/products/cup.jpg" },
    { title:"Túi giấy Kraft", description:"Tái chế, bền đẹp.",  price:"30.000đ / 50 cái", image:"/products/bag.jpg" },
    { title:"Hộp giấy đựng thức ăn", description:"Tiện lợi, sạch sẽ.", price:"70.000đ / 100 cái", image:"/products/box.jpg" }
  ];

  const base = (Array.isArray(productsData) && productsData.length) ? productsData : demo;

  const products = base.map((p, i) => ({
    title: p.title || p.name || "Sản phẩm",
    description: p.description || "",
    price: p.price || "",
    image: p.image || demo[i]?.image || "/products/box.jpg" // ảnh dự phòng
  }));

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} description={p.description} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  );
}
