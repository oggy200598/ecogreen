import {Link} from "react-router-dom"
const posts=[
  {img:"/news/n1.jpg",title:"Mẹo chọn thùng carton phù hợp",date:"23/09/2025",to:"/tin-tuc/meo-chon-thung"},
  {img:"/news/n2.jpg",title:"In offset vs flexo khác gì",date:"20/09/2025",to:"/tin-tuc/in-offset-vs-flexo"},
  {img:"/news/n3.jpg",title:"Quy trình sản xuất carton",date:"15/09/2025",to:"/tin-tuc/quy-trinh-carton"},
]
export default function NewsPreview(){
  return(
    <section className="py-12 px-6">
      <h3 className="text-2xl font-bold text-center mb-8">Tin tức & kiến thức</h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p,i)=>(
          <Link key={i} to={p.to} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={p.img} alt={p.title} className="h-44 w-full object-cover"/>
            <div className="p-4">
              <p className="text-sm text-gray-500">{p.date}</p>
              <h4 className="font-semibold mt-1">{p.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
