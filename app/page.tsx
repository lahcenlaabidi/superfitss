"use client";

import { ShoppingBag, Truck, ShieldCheck, RotateCcw, Star, ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
  { name: "Performance Training Set", price: 249, old: 349, tag: "BEST SELLER" },
  { name: "Premium Combat Gloves", price: 199, old: 279, tag: "-29%" },
  { name: "Training Essentials Pack", price: 299, old: 399, tag: "LIMITED" },
];

export default function Home() {
  return (
    <main>
      <header className="container" style={{padding:"22px 0", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <div style={{fontSize:24,fontWeight:900,letterSpacing:-1}}>SUPER<span style={{opacity:.55}}>FITSS</span></div>
        <nav style={{display:"flex",gap:24,fontSize:14,fontWeight:700}}>
          <a href="#shop">Shop</a><a href="#why">Why us</a><a href="#reviews">Reviews</a>
        </nav>
        <button className="btn" style={{background:"#171717",color:"#fff"}}><ShoppingBag size={18}/> <span style={{marginLeft:8}}>Cart</span></button>
      </header>

      <section className="container" style={{paddingBottom:32}}>
        <div className="hero" style={{padding:"clamp(34px,7vw,80px)", display:"grid",gridTemplateColumns:"1.25fr .75fr",gap:30}}>
          <div>
            <div style={{display:"inline-flex",gap:8,alignItems:"center",background:"rgba(216,255,62,.12)",color:"#d8ff3e",padding:"8px 12px",borderRadius:99,fontSize:12,fontWeight:800}}>🇲🇦 COD DELIVERY ACROSS MOROCCO</div>
            <h1 style={{fontSize:"clamp(42px,6vw,76px)",lineHeight:.96,letterSpacing:-4,margin:"22px 0"}}>Better gear.<br/><span style={{color:"#d8ff3e"}}>Better training.</span></h1>
            <p style={{maxWidth:520,color:"#c9c9c9",fontSize:18,lineHeight:1.6}}>Quality products, fast delivery and simple cash-on-delivery ordering. No card required.</p>
            <a href="#shop" className="btn btn-accent" style={{marginTop:20}}>Shop best sellers <ArrowRight size={18} style={{marginLeft:8}}/></a>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:280}}>
            <div style={{width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle,#d8ff3e 0,#a4c02e 45%,#4b512b 100%)",display:"grid",placeItems:"center",boxShadow:"0 25px 80px rgba(216,255,62,.15)"}}><span style={{fontSize:74}}>🥊</span></div>
          </div>
        </div>
      </section>

      <section id="why" className="container" style={{padding:"24px 0 70px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
          {[{icon:<Truck/>,title:"Fast delivery",text:"Morocco-wide shipping"},{icon:<ShieldCheck/>,title:"Secure COD",text:"Pay when you receive"},{icon:<RotateCcw/>,title:"Easy returns",text:"Simple exchange process"},{icon:<Star/>,title:"Trusted quality",text:"Products selected for you"}].map((x)=><div key={x.title} className="card" style={{padding:20}}><div style={{marginBottom:14}}>{x.icon}</div><b>{x.title}</b><div style={{fontSize:13,color:"var(--muted)",marginTop:6}}>{x.text}</div></div>)}
        </div>
      </section>

      <section id="shop" style={{background:"var(--surface)",padding:"70px 0"}}>
        <div className="container">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",marginBottom:28}}><div><p style={{fontWeight:800,margin:0}}>SHOP</p><h2 style={{fontSize:42,letterSpacing:-2,margin:"8px 0 0"}}>Best sellers</h2></div><a href="#shop" style={{fontWeight:800}}>View all →</a></div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
            {products.map(p=><article className="card" key={p.name}><div style={{height:280,background:"linear-gradient(135deg,#ededeb,#d8d8d2)",display:"grid",placeItems:"center",position:"relative"}}><span style={{fontSize:82}}>🥊</span><span style={{position:"absolute",top:14,left:14,background:"#171717",color:"white",padding:"7px 10px",borderRadius:8,fontSize:11,fontWeight:900}}>{p.tag}</span></div><div style={{padding:20}}><h3 style={{margin:"0 0 12px",fontSize:18}}>{p.name}</h3><div><b style={{fontSize:22}}>{p.price} DH</b> <span style={{color:"#999",textDecoration:"line-through",marginLeft:8}}>{p.old} DH</span></div><button className="btn btn-accent" style={{width:"100%",marginTop:16}}>ORDER NOW — COD</button></div></article>)}
          </div>
        </div>
      </section>

      <section id="reviews" className="container" style={{padding:"70px 0"}}>
        <div style={{textAlign:"center",maxWidth:700,margin:"auto"}}><div style={{display:"flex",justifyContent:"center",gap:4}}>{[1,2,3,4,5].map(i=><Star key={i} size={18} fill="currentColor"/>)}</div><h2 style={{fontSize:42,letterSpacing:-2}}>Loved by customers</h2><p style={{color:"var(--muted)",fontSize:18}}>“Fast delivery, good quality and the COD order was incredibly easy.”</p><div style={{marginTop:18,fontWeight:800}}>Verified customer · Fes</div></div>
      </section>

      <section className="container" style={{paddingBottom:70}}><div style={{background:"#171717",color:"white",borderRadius:24,padding:"34px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:20}}><div><h2 style={{margin:0,fontSize:30}}>Ready to order?</h2><p style={{color:"#aaa",marginBottom:0}}>Choose your product and pay on delivery.</p></div><a href="#shop" className="btn btn-accent">Start shopping <CheckCircle2 size={18} style={{marginLeft:8}}/></a></div></section>

      <footer style={{borderTop:"1px solid var(--line)",padding:"30px 0",color:"var(--muted)",fontSize:13}}><div className="container" style={{display:"flex",justifyContent:"space-between"}}><span>© 2026 SuperFitss</span><span>COD · Delivery · Returns · Contact</span></div></footer>

      <style jsx>{`@media(max-width:800px){nav{display:none!important}.hero{grid-template-columns:1fr!important}.hero>div:last-child{display:none}.container{width:min(100% - 24px,1180px)}#why>div{grid-template-columns:1fr 1fr!important}#shop .container>div:last-child{grid-template-columns:1fr!important}section h2{font-size:34px!important}}`}</style>
    </main>
  );
}
