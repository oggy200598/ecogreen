export default function PriceCard({ title, description, price }) {
  return (
    <div className="bg-white border rounded-lg p-6 text-center shadow hover:shadow-md transition">
      <h4 className="text-2xl font-bold text-green-600">{title}</h4>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-4 text-green-700 text-xl font-semibold">{price}</p>
    </div>
  );
}