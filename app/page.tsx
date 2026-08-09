"use client";

import { ShoppingBag, Truck, ShieldCheck, RotateCcw, Star, ArrowRight, CheckCircle2, Phone, MapPin } from "lucide-react";

const products = [
  { name: "Performance Training Set", price: 249, old: 349, tag: "BEST SELLER" },
  { name: "Premium Combat Gloves", price: 199, old: 279, tag: "-29%" },
  { name: "Training Essentials Pack", price: 299, old: 399, tag: "LIMITED" },
];

export default function Home() {
  return (
    <main>
      <header className="container site-header">
        <a href="#" className="logo">SUPER<span>FITSS</span></a>
        <nav><a href="#shop">Shop</a><a href="#why">Why us</a><a href="#reviews">Reviews</a><a href="/admin">Admin</a></nav>
        <a className="btn cart" href="#shop"><ShoppingBag size={18}/> Cart</a>
      </header>

      <section className="container" style={{paddingBottom:32}}>
        <div className="hero hero-grid">
          <div>
            <div className="eyebrow">🇲🇦 COD DELIVERY ACROSS MOROCCO</div>
            <h1>Better gear.<br/><span>Better training.</span></h1>
            <p className="hero-copy">Quality products, fast delivery and simple cash-on-delivery ordering. No card required.</p>
            <a href="#shop" className="btn btn-accent">Shop best sellers <ArrowRight size={18}/></a>
            <div className="hero-trust"><span><CheckCircle2 size={15}/> Pay on delivery</span><span><Truck size={15}/> 2–5 days</span></div>
          </div>
          <div className="hero-art"><div className="product-orb">🥊</div></div>
        </div>
      </section>

      <section id="why" className="container why-section">
        <div className="feature-grid">
          {[{icon:<Truck/>,title:"Fast delivery",text:"Morocco-wide shipping"},{icon:<ShieldCheck/>,title:"Secure COD",text:"Pay when you receive"},{icon:<RotateCcw/>,title:"Easy returns",text:"Simple exchange process"},{icon:<Star/>,title:"Trusted quality",text:"Products selected for you"}].map(x=><div key={x.title} className="card feature"><div className="feature-icon">{x.icon}</div><b>{x.title}</b><div className="muted">{x.text}</div></div>)}
        </div>
      </section>

      <section id="shop" className="shop-section">
        <div className="container">
          <div className="section-head"><div><p className="section-kicker">SHOP</p><h2>Best sellers</h2></div><a href="#shop">View all →</a></div>
          <div className="product-grid">
            {products.map(p=><article className="card product" key={p.name}>
              <div className="product-image"><span>🥊</span><b>{p.tag}</b></div>
              <div className="product-info"><h3>{p.name}</h3><div><strong>{p.price} DH</strong> <del>{p.old} DH</del></div><a className="btn btn-accent order-btn" href={`/checkout?product=${encodeURIComponent(p.name)}&price=${p.price}`}>ORDER NOW — COD</a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="reviews" className="container reviews">
        <div className="stars">★★★★★</div><h2>Loved by customers</h2><p>“Fast delivery, good quality and the COD order was incredibly easy.”</p><b>Verified customer · Fes</b>
      </section>

      <section className="container" style={{paddingBottom:70}}><div className="cta"><div><h2>Ready to order?</h2><p>Choose your product and pay on delivery.</p></div><a href="#shop" className="btn btn-accent">Start shopping <CheckCircle2 size={18}/></a></div></section>
      <footer><div className="container footer-inner"><span>© 2026 SuperFitss</span><span><Phone size={14}/> COD · Delivery · Returns · Contact</span></div></footer>
    </main>
  );
}
