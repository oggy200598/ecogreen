export default function WhyUs(){
  const items=[
    {n:"+10 năm",d:"Kinh nghiệm bao bì"},
    {n:"ISO",d:"Quy trình & chất lượng"},
    {n:"Giá tốt",d:"Tối ưu chi phí"},
    {n:"Uy tín",d:"Đồng hành nhiều thương hiệu"},
  ]
  return(
    <section className="py-12 px-6">
      <h3 className="text-2xl font-bold text-center mb-8">Lý do chọn EcoGreen</h3>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it,i)=>(
          <div key={i} className="text-center p-6 rounded-xl border">
            <p className="text-2xl font-extrabold text-green-600">{it.n}</p>
            <p className="mt-1 text-gray-700">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
