
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Search, ShoppingBag, Menu, X, 
  Plus, Minus, Globe, Zap, Layers, Sparkles,
  Database, Instagram, Twitter, Mail, MapPin, 
  ChevronDown, ExternalLink, Play, Check,
  ChevronRight, ArrowDown, Star, Layout,
  Cpu, Smartphone, ShieldCheck
} from 'lucide-react';

// --- 1. MONOLITH ARCHITECTURE (LUXURY SHOWCASE) ---
export const MonolithDemo = () => {
  return (
    <div className="bg-[#0a0a0a] text-stone-200 font-serif selection:bg-stone-500 selection:text-white w-full">
      {/* Sticky Header - Changed from fixed to sticky for modal compatibility */}
      <nav className="sticky top-0 w-full p-8 flex justify-between items-center z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
        <span className="text-2xl font-black tracking-tighter italic">MONOLITH</span>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
          <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#projects" className="hover:text-white transition-colors">Archive</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors"><Menu className="w-5 h-5"/></button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center px-8 md:px-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" className="w-full h-full object-cover opacity-50 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <p className="text-emerald-500 font-sans text-xs font-black uppercase tracking-[0.6em] mb-8 animate-in fade-in slide-in-from-left-4 duration-700">Pritzker Prize 2024 Nominee</p>
          <h1 className="text-6xl md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Designing <br/> Immortality.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <button className="group flex items-center space-x-6 text-xl italic hover:text-white transition-all">
              <span>Enter the Archive</span>
              <div className="w-16 h-px bg-stone-500 group-hover:w-24 group-hover:bg-white transition-all"></div>
            </button>
            <div className="h-px w-20 bg-white/10 hidden md:block"></div>
            <p className="text-stone-500 font-sans text-[10px] uppercase tracking-widest max-w-[200px]">We believe in spaces that talk through silence.</p>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce">
          <ArrowDown className="w-6 h-6 text-stone-600" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-40 px-8 md:px-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <h2 className="text-5xl md:text-7xl font-light italic leading-tight tracking-tighter">Raw Materials. <br/> Pure Vision.</h2>
            <div className="h-1 w-20 bg-stone-800"></div>
            <p className="text-stone-400 font-sans leading-relaxed text-lg font-light">
              Our studio operates at the intersection of brutalist honesty and contemporary luxury. We don't hide the concrete; we celebrate its texture as the ultimate expression of permanence.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5 font-sans">
              <div>
                <p className="text-4xl font-bold mb-3 italic">30+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 font-black">Design Patents</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-3 italic">18</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 font-black">Monographs</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/4] group">
            <div className="absolute -inset-4 border border-stone-800 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200" className="w-full h-full object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* Featured Works - Editorial Grid */}
      <section id="projects" className="py-40 px-8 md:px-20 bg-black">
        <div className="mb-40 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
           <h3 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">Archive<span className="text-stone-800">.</span></h3>
           <p className="max-w-xs text-stone-500 font-sans text-xs uppercase tracking-[0.3em] leading-loose">A curated selection of residential and cultural landmarks built across five continents.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-y-40 gap-x-12">
           {/* Work 1 */}
           <div className="md:col-span-7 group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-12">
                 <img src="https://images.unsplash.com/photo-1518005020251-58296b97bc7c?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <p className="text-[10px] font-sans text-stone-600 uppercase tracking-widest mb-4 font-black">01 / Residential — Zurich</p>
              <h4 className="text-4xl italic font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">The Obsidian House</h4>
              <p className="text-stone-500 font-sans max-w-md">Winner of the International Architecture Award for the most innovative use of dark textures in natural lighting.</p>
           </div>
           {/* Work 2 */}
           <div className="md:col-span-4 md:col-start-9 md:mt-40 group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-12">
                 <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <p className="text-[10px] font-sans text-stone-600 uppercase tracking-widest mb-4 font-black">02 / Cultural — Oslo</p>
              <h4 className="text-4xl italic font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">Nordic Silence</h4>
           </div>
        </div>
      </section>

      {/* Services/Expertise */}
      <section id="services" className="py-40 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto space-y-32">
          <div className="grid md:grid-cols-3 gap-20">
             {[
               { t: "Conceptualization", d: "We translate abstract emotions into concrete spatial blueprints." },
               { t: "Material Sourcing", d: "Hand-picked textures from the world's most exclusive quarries." },
               { t: "Structural Tech", d: "Merging ancestral masonry with future-proof engineering." }
             ].map((s, i) => (
               <div key={i} className="space-y-8 group">
                  <span className="text-4xl font-black italic text-stone-800 group-hover:text-emerald-500 transition-colors">0{i+1}</span>
                  <h5 className="text-2xl font-black uppercase tracking-tighter">{s.t}</h5>
                  <p className="text-stone-500 font-sans text-sm leading-relaxed">{s.d}</p>
               </div>
             ))}
          </div>
          <div className="h-px w-full bg-white/5"></div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-40 px-8 md:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          <h2 className="text-6xl md:text-[12vw] font-black italic tracking-tighter uppercase leading-none hover:text-emerald-500 transition-all duration-500 cursor-default">Inquire.</h2>
          <div className="flex flex-col md:flex-row gap-16 font-sans">
             <div className="space-y-4">
               <p className="text-stone-600 text-[10px] uppercase tracking-[0.4em] font-black">Direct Line</p>
               <p className="text-2xl font-bold tracking-tighter">+41 44 211 4000</p>
             </div>
             <div className="space-y-4">
               <p className="text-stone-600 text-[10px] uppercase tracking-[0.4em] font-black">Global HQ</p>
               <p className="text-2xl font-bold tracking-tighter italic">Bahnhofstrasse 1, Zurich</p>
             </div>
          </div>
          <p className="text-stone-800 text-[9px] uppercase tracking-[0.6em] font-black pt-20">© 2024 Monolith Architecture — Defined by Absence</p>
        </div>
      </footer>
    </div>
  );
};

// --- 2. VOGUE COUTURE (HIGH-END E-COMMERCE) ---
export const VogueDemo = () => {
  const [cart, setCart] = useState<{id:number, name:string, price:number, qty:number, img:string}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (p: any) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === p.id);
      if (exists) return prev.map(i => i.id === p.id ? {...i, qty: i.qty + 1} : i);
      return [...prev, {...p, qty: 1}];
    });
    setIsCartOpen(true);
  };

  return (
    <div className="bg-white text-neutral-900 font-sans selection:bg-black selection:text-white w-full">
      {/* Sticky Nav */}
      <nav className="sticky top-0 w-full p-6 md:px-12 flex justify-between items-center z-[60] bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="flex items-center space-x-10">
          <Menu className="w-5 h-5 cursor-pointer" />
          <div className="hidden lg:flex space-x-8 text-[10px] font-black uppercase tracking-widest text-neutral-400">
             <a href="#" className="hover:text-black transition-colors">New In</a>
             <a href="#" className="hover:text-black transition-colors">Women</a>
             <a href="#" className="hover:text-black transition-colors">Atelier</a>
          </div>
        </div>
        <h1 className="text-2xl font-black tracking-tighter uppercase italic translate-x-1/2 md:translate-x-0 absolute left-1/2 md:static -translate-x-1/2">VOGUE <span className="font-light">COUTURE</span></h1>
        <div className="flex items-center space-x-6">
           <Search className="w-5 h-5 hidden sm:block" />
           <button onClick={() => setIsCartOpen(true)} className="relative group p-2">
             <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
             {cart.length > 0 && <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-[8px] flex items-center justify-center rounded-full animate-pulse">{cart.reduce((a,b)=>a+b.qty,0)}</span>}
           </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row border-b border-neutral-100">
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 space-y-12 bg-[#faf9f6]">
           <div className="space-y-4">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 animate-in fade-in duration-500">Editorial — Vol. 22</p>
             <h2 className="text-7xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter italic animate-in slide-in-from-left-8 duration-1000">Silent <br/> Luxury.</h2>
           </div>
           <p className="text-xl text-neutral-500 max-w-sm font-light leading-relaxed italic">Curated essentials for the modern silhouette. Handcrafted in the heart of Lombardy.</p>
           <div className="flex space-x-6">
             <button className="px-12 py-5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl">Explore Atelier</button>
             <button className="px-12 py-5 border border-neutral-200 text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-50 transition-all">Lookbook</button>
           </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute bottom-12 right-12 text-right">
             <p className="text-white text-[8px] font-black uppercase tracking-[0.4em] mb-2">Winter Campaign</p>
             <p className="text-white text-3xl font-black italic tracking-tighter uppercase underline decoration-1 underline-offset-8 decoration-white/30">The Outerwear Edit</p>
          </div>
        </div>
      </section>

      {/* Shop The Edit (Editorial Grid) */}
      <section className="py-40 px-8 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 border-b border-neutral-100 pb-12">
           <div>
             <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-4">The Selection.</h3>
             <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Handpicked pieces from our winter atelier</p>
           </div>
           <div className="flex space-x-4">
              <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1">All Items</button>
              <button className="text-[10px] font-black uppercase tracking-widest text-neutral-300 hover:text-black transition-colors pb-1">Outerwear</button>
              <button className="text-[10px] font-black uppercase tracking-widest text-neutral-300 hover:text-black transition-colors pb-1">Essentials</button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
          {/* Big Item */}
          <div className="md:col-span-8 group cursor-pointer" onClick={() => addToCart({ id: 1, n: "The Silk Trench", p: 2450, img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000" })}>
            <div className="aspect-[16/10] bg-neutral-50 overflow-hidden mb-10 relative">
               <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md text-[9px] font-black uppercase tracking-widest">Atelier Exclusive</div>
            </div>
            <div className="flex justify-between items-center px-4">
               <div>
                 <h4 className="text-2xl font-black uppercase tracking-tighter italic">Pure Mulberry Silk Trench</h4>
                 <p className="text-neutral-400 text-xs italic">Limited Release of 50 Pieces</p>
               </div>
               <span className="text-xl font-bold">€ 2,450.00</span>
            </div>
          </div>
          
          {/* Smaller items side by side */}
          {[
            { id: 2, n: "Luna Cashmere", p: 1120, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600" },
            { id: 3, n: "Midnight Gown", p: 3800, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600" }
          ].map((item, i) => (
            <div key={item.id} className="md:col-span-4 group cursor-pointer" onClick={() => addToCart(item)}>
               <div className="aspect-[3/4] bg-neutral-50 overflow-hidden mb-8 relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                  <button className="absolute bottom-8 left-8 right-8 py-4 bg-white text-black text-[9px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">Add to Bag</button>
               </div>
               <h4 className="text-sm font-black uppercase tracking-widest mb-1">{item.n}</h4>
               <p className="text-sm font-bold opacity-60">€ {item.p}.00</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-60 px-8 bg-neutral-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" className="w-full h-full object-cover" /></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-16">
          <p className="text-xs font-black uppercase tracking-[0.6em] text-neutral-500">Since 2012</p>
          <h2 className="text-6xl md:text-[10vw] font-black italic tracking-tighter uppercase leading-none italic animate-pulse">Eternal <br/> Craft.</h2>
          <p className="text-xl md:text-3xl font-light italic opacity-60 leading-relaxed">"We don't create trends. We curate the timeless vocabulary of excellence."</p>
          <div className="h-20 w-px bg-white/20 mx-auto"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 px-8 md:px-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-2 space-y-8">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase">VOGUE.</h1>
            <p className="text-neutral-400 max-w-sm leading-loose text-sm">Our boutiques in Milan, Paris, and Tokyo offer a direct immersion into the world of Vogue Couture. Every garment is a masterpiece of Italian heritage.</p>
            <div className="flex space-x-6">
              <Instagram className="w-5 h-5 text-neutral-300 hover:text-black cursor-pointer" />
              <Twitter className="w-5 h-5 text-neutral-300 hover:text-black cursor-pointer" />
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-widest mb-10">Client Service</h5>
            <ul className="space-y-4 text-xs font-bold text-neutral-400">
              <li className="hover:text-black cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-black cursor-pointer">Atelier Appointments</li>
              <li className="hover:text-black cursor-pointer">Size Guide</li>
              <li className="hover:text-black cursor-pointer">Care Instructions</li>
            </ul>
          </div>
          <div className="space-y-10">
            <h5 className="text-[10px] font-black uppercase tracking-widest">Journal</h5>
            <div className="flex border-b border-neutral-200 pb-2">
              <input type="email" placeholder="JOIN THE CIRCLE" className="bg-transparent outline-none flex-1 text-[10px] font-black tracking-widest italic" />
              <ArrowRight className="w-4 h-4" />
            </div>
            <p className="text-[9px] text-neutral-300 font-black uppercase tracking-[0.2em]">Exclusivity is a commitment.</p>
          </div>
        </div>
      </footer>

      {/* Cart Drawer - Using high z-index and fixed position for interaction */}
      <div className={`fixed inset-0 z-[100] transition-all duration-700 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsCartOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-700 p-10 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex justify-between items-center mb-16 border-b border-neutral-100 pb-10">
             <h3 className="text-3xl font-black uppercase tracking-tighter italic">Your Edit</h3>
             <X className="w-6 h-6 cursor-pointer hover:rotate-90 transition-transform" onClick={() => setIsCartOpen(false)} />
           </div>
           
           <div className="flex-1 overflow-auto space-y-12 no-scrollbar px-2">
             {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-neutral-300">
                   <ShoppingBag className="w-16 h-16 mb-6 opacity-20" />
                   <p className="font-black italic uppercase tracking-widest">Empty Selection</p>
                </div>
             ) : cart.map(item => (
               <div key={item.id} className="flex gap-10 group">
                 <div className="w-24 aspect-[3/4] bg-neutral-50 overflow-hidden shrink-0">
                    <img src={item.img} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-1">
                      <h4 className="font-black uppercase text-[10px] tracking-widest">{item.name}</h4>
                      <p className="text-neutral-400 text-[10px] italic">Classic Fit / Size M</p>
                    </div>
                    <div className="flex justify-between items-end">
                       <div className="flex items-center space-x-4">
                          <button className="p-1 hover:bg-neutral-50 rounded" onClick={()=>setCart(prev=>prev.map(i=>i.id===item.id?{...i,qty:Math.max(1,i.qty-1)}:i))}><Minus className="w-3 h-3"/></button>
                          <span className="text-xs font-black">{item.qty}</span>
                          <button className="p-1 hover:bg-neutral-50 rounded" onClick={()=>addToCart(item)}><Plus className="w-3 h-3"/></button>
                       </div>
                       <span className="text-sm font-bold">€ {item.price * item.qty}</span>
                    </div>
                 </div>
               </div>
             ))}
           </div>

           {cart.length > 0 && (
             <div className="mt-auto pt-12 border-t border-neutral-100">
                <div className="flex justify-between items-end mb-10 px-2">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Order Value</span>
                   <span className="text-3xl font-black italic">€ {cart.reduce((a,b)=>a+(b.price*b.qty),0).toLocaleString()}.00</span>
                </div>
                <button className="w-full py-8 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-neutral-800 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                   Initiate Secure Checkout
                </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

// --- 3. NEXUS CREATIVE (TECH-FORWARD AGENCY) ---
export const NexusCreativeDemo = () => {
  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-blue-600/40 selection:text-white w-full">
      {/* Background Grid & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[140px]"></div>
      </div>

      {/* Sticky Nav */}
      <nav className="sticky top-0 w-full p-8 flex justify-between items-center z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">NEXUS<span className="text-blue-500">.</span>LABS</span>
        </div>
        <div className="hidden md:flex space-x-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
           <a href="#vision" className="hover:text-blue-500 transition-colors">Vision</a>
           <a href="#capabilities" className="hover:text-blue-500 transition-colors">Engine</a>
           <a href="#work" className="hover:text-blue-500 transition-colors">Archive</a>
           <a href="#connect" className="hover:text-blue-500 transition-colors">Connect</a>
        </div>
        <button className="px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Launch Console</button>
      </nav>

      {/* Hero */}
      <section id="vision" className="min-h-screen flex flex-col justify-center px-8 md:px-24 relative z-10 pt-20 border-b border-white/5 overflow-hidden">
         {/* Animated Title */}
         <div className="max-w-6xl space-y-16 animate-in zoom-in-95 duration-1000">
           <div className="inline-flex items-center space-x-3 px-5 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
             <Sparkles className="w-4 h-4" />
             <span>The Frontier of Digital Craft</span>
           </div>
           
           <h1 className="text-7xl md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase italic">
             Architecting <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Velocity.</span>
           </h1>
           
           <div className="flex flex-col lg:flex-row gap-20 items-start">
             <p className="text-xl md:text-3xl text-white/40 font-medium max-w-2xl leading-relaxed italic">
               A high-performance boutique building high-stakes digital experiences, custom AI workflows, and immersive Web3 ecosystems.
             </p>
             <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
               <button className="px-14 py-8 bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-700 transition-all transform active:scale-95 shadow-[0_0_80px_rgba(37,99,235,0.3)]">Start Discovery</button>
               <div className="flex items-center space-x-6 p-4 rounded-3xl bg-white/5 border border-white/5">
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center font-black text-xs">U{i}</div>)}
                 </div>
                 <p className="text-[9px] font-black text-white/30 uppercase tracking-widest leading-tight">Join 40+ Tech Titans <br/> In the Lab</p>
               </div>
             </div>
           </div>
         </div>
         
         {/* Background Flow Effect */}
         <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
      </section>

      {/* Engine / Capabilities */}
      <section id="capabilities" className="py-40 px-8 md:px-24 relative z-10 bg-[#050505]">
        <div className="grid lg:grid-cols-2 gap-32 mb-40 border-b border-white/5 pb-32">
          <div className="space-y-12">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.6em]">Core Stack</h2>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">The <br/> Engine<span className="text-blue-500">.</span></h3>
          </div>
          <div className="space-y-12 self-end">
            <p className="text-2xl text-white/50 leading-relaxed font-light italic">We don't just ship code; we deliver unfair competitive advantages through extreme technical depth.</p>
            <div className="flex flex-wrap gap-4">
               {["Next.js 15", "Rust", "TypeScript", "Three.js", "Redis", "Supabase"].map(tech => (
                 <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors cursor-default">{tech}</span>
               ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { t: "AI Synthesis", d: "Deploying custom RAG systems and autonomous agentic workflows for enterprise scale.", i: Database },
            { t: "Spatial Computing", d: "Next-gen WebGL and 3D interfaces designed for the upcoming AR/VR era.", i: Globe },
            { t: "Infinite Scale", d: "Stateless architectures designed to handle millions of requests without latency.", i: Zap },
            { t: "UX Engineering", d: "Visceral motion design and physics-based interactions that feel alive.", i: Smartphone },
            { t: "Cyber Hardening", d: "Security-first deployment strategies and automated penetration testing.", i: ShieldCheck },
            { t: "Real-time Systems", d: "WebSocket-driven collaborative tools with sub-ms synchronization.", i: Cpu }
          ].map((s, i) => (
            <div key={i} className="group p-12 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[48px] hover:bg-white/10 hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
               <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-10 border border-blue-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <s.i className="w-8 h-8 text-blue-500" />
               </div>
               <h4 className="text-3xl font-black uppercase mb-6 tracking-tight italic">{s.t}</h4>
               <p className="text-white/40 leading-relaxed font-medium italic">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Showcase */}
      <section id="work" className="py-40 bg-black relative z-10">
        <div className="px-8 md:px-24 mb-32 flex justify-between items-end gap-12">
           <div>
             <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter italic leading-none">The Lab.</h2>
             <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mt-8 italic">Internal Experiments & Client Deployments</p>
           </div>
           <button className="flex items-center space-x-6 group">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">View All Case Studies</span>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                 <ChevronRight className="w-6 h-6" />
              </div>
           </button>
        </div>

        <div className="space-y-40">
           {[
             { t: "Synthetix AI", c: "Brand Identity & Product Design", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600" },
             { t: "Aether Protocol", c: "Web3 Ecosystem Development", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600" }
           ].map((work, i) => (
             <div key={i} className="group relative w-full aspect-[21/9] overflow-hidden cursor-pointer">
                <img src={work.img} className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 space-y-6">
                   <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">{work.c}</p>
                   <h4 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase">{work.t}</h4>
                   <button className="px-10 py-4 border border-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Explore Project</button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Connect / Footer */}
      <footer id="connect" className="py-40 px-8 md:px-24 border-t border-white/5 relative z-10 text-center bg-[#020202]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter italic leading-none mb-24">Connect<span className="text-blue-600">_</span></h2>
          <div className="grid md:grid-cols-3 gap-20 w-full mb-40">
            <div className="group cursor-pointer">
              <p className="text-blue-500 font-black uppercase tracking-widest text-[9px] mb-4">Signal</p>
              <p className="text-2xl font-black group-hover:italic transition-all">nexus@labs.tech</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-purple-500 font-black uppercase tracking-widest text-[9px] mb-4">Twitter</p>
              <p className="text-2xl font-black group-hover:italic transition-all">@nexus_labs</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-emerald-500 font-black uppercase tracking-widest text-[9px] mb-4">Telegram</p>
              <p className="text-2xl font-black group-hover:italic transition-all">/nexuslabs_hq</p>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center space-x-3">
               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4 fill-white" /></div>
               <span className="font-black uppercase tracking-widest text-xs italic">NEXUS CREATIVE SYSTEMS</span>
            </div>
            <p className="text-white/10 font-black uppercase tracking-[0.5em] text-[8px]">© 2024 DEPLOYED WORLDWIDE — ALL ENCRYPTED</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
