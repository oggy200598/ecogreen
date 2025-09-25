export default function PartnersMarquee(){
  const logos=["/partners/p1.png","/partners/p2.png","/partners/p3.png","/partners/p4.png","/partners/p5.png"]
  return(
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto overflow-hidden">
        <div className="flex items-center gap-10 animate-[scroll_20s_linear_infinite]">
          {logos.concat(logos).map((src,i)=>(
            <img key={i} src={src} alt="partner" className="h-10 opacity-80"/>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  )
}
