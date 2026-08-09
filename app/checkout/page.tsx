"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, Truck, ShieldCheck } from "lucide-react";
import { Suspense, useState } from "react";

function CheckoutForm(){
  const params=useSearchParams();
  const product=params.get("product")||"Performance Training Set";
  const price=Number(params.get("price")||249);
  const [sent,setSent]=useState(false);
  if(sent) return <main className="checkout-wrap"><div className="success"><CheckCircle2 size={56}/><h1>Order received!</h1><p>Thank you. We will call you shortly to confirm your COD order.</p><a className="btn btn-accent" href="/">Back to store</a></div></main>;
  return <main className="checkout-wrap"><div className="checkout-card"><div><a href="/" className="logo">SUPER<span>FITSS</span></a><h1>Complete your COD order</h1><p className="muted">No online payment. Pay when your order arrives.</p></div><div className="order-summary"><b>{product}</b><strong>{price} DH</strong></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Full name<input required placeholder="Your full name"/></label><label>Phone number<input required type="tel" placeholder="06 XX XX XX XX"/></label><label>City<select required defaultValue=""><option value="" disabled>Select your city</option><option>Fes</option><option>Casablanca</option><option>Rabat</option><option>Marrakech</option><option>Tangier</option><option>Agadir</option><option>Other</option></select></label><label>Address<input required placeholder="Street, neighborhood, building"/></label><label>Quantity<select defaultValue="1"><option>1</option><option>2</option><option>3</option></select></label><button className="btn btn-accent submit" type="submit">CONFIRM ORDER — {price} DH</button></form><div className="checkout-trust"><span><Truck size={16}/> Delivery 2–5 days</span><span><ShieldCheck size={16}/> Pay on delivery</span></div></div></main>
}
export default function Checkout(){return <Suspense fallback={<main className="checkout-wrap">Loading…</main>}><CheckoutForm/></Suspense>}
