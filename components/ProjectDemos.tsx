
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Search, ShoppingBag, Menu, X, 
  Plus, Minus, Globe, Zap, Layers, Sparkles,
  Database, Instagram, Twitter, Mail, MapPin, 
  ChevronDown, ExternalLink, Play, Check
} from 'lucide-react';

// --- HELPER: SCROLL REVEAL ANIMATION COMPONENT ---
const Reveal = ({ children }: { children: React.ReactNode }) => (
  <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out fill-mode-forwards">
    {children}
  </div>
);

// --- 1. MONOLITH ARCHITECTURE (LUXURY SHOWCASE) ---
export const MonolithDemo = () => {
  return (
    <div className="bg-[#0a0a0a] text-stone-200 font-serif selection:bg-stone-500 selection:text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <span className="text-2xl font-black tracking-tighter italic">MONOLITH</span>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
          <a href="#about" className="hover:text-white">Philosophy</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <button className="md:hidden"><Menu /></button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="text-emerald-500 font-sans text-xs font-black uppercase tracking-[0.5em] mb-6 animate-pulse">Established 1994</p>
          <h1 className="text-7xl md:text-[12vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-12">
            Silence <br/> & Structure.
          </h1>
          <button className="group flex items-center space-x-6 text-xl italic hover:text-white transition-all">
            <span>Explore our archive</span>
            <div className="w-16 h-px bg-stone-500 group-hover:w-24 group-hover:bg-white transition-all"></div>
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-40 px-8 md:px-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-light italic leading-tight">"Architecture is the learned game, correct and magnificent, of forms assembled in the light."</h2>
            <p className="text-stone-500 font-sans leading-relaxed text-lg max-w-md">
              We create monoliths that stand the test of time. Our approach is subtraction, removing the unnecessary until only the soul of the space remains.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5 font-sans">
              <div>
                <p className="text-3xl font-bold mb-2 italic">140+</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-600">Global Awards</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2 italic">12</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-600">Offices Worldwide</p>
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] bg-stone-900 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* Projects Grid (Long Section) */}
      <section id="projects" className="py-40 px-8 md:px-20">
        <div className="flex justify-between items-end mb-32">
          <h3 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase">Works</h3>
          <p className="hidden md:block text-stone-600 font-sans text-xs font-bold uppercase tracking-widest pb-4">Selected Portfolio 2020-2024</p>
        </div>
        
        <div className="space-y-40">
          {[
            { t: "The Concrete Pavilion", l: "Milan, IT", img: "https://images.unsplash.com/photo-1518005020251-58296b97bc7c?q=80&w=1200" },
            { t: "Glass & Shadows", l: "Tokyo, JP", img: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1200" },
            { t: "The Oak Residence", l: "Oslo, NO", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200" }
          ].map((proj, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center group`}>
              <div className="w-full md:w-3/5 aspect-video overflow-hidden">
                <img src={proj.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="w-full md:w-2/5 space-y-6">
                <p className="text-xs font-sans text-stone-500 font-bold uppercase tracking-widest">0{i+1} — {proj.l}</p>
                <h4 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">{proj.t}</h4>
                <p className="text-stone-600 font-sans leading-relaxed">A study in minimalism and structural integrity, utilizing raw materials to define a new luxury.</p>
                <button className="pt-6 font-sans text-[10px] font-bold uppercase tracking-[0.3em] flex items-center space-x-4 group-hover:text-white transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#050505] py-40 px-8 md:px-20 text-center">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase">Inquire</h2>
          <p className="text-stone-500 font-sans text-lg">We are currently accepting new commissions for 2025. Let's build a monolith together.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-12 border-t border-white/5 font-sans">
             <div className="space-y-2">
               <p className="text-stone-600 text-[10px] uppercase tracking-widest">General</p>
               <p className="text-lg font-bold">studio@monolith.com</p>
             </div>
             <div className="space-y-2">
               <p className="text-stone-600 text-[10px] uppercase tracking-widest">Follow</p>
               <div className="flex space-x-6">
                  <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                  <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
               </div>
             </div>
          </div>
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
    <div className="bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      {/* Dynamic Nav */}
      <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-[60] bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <Menu className="w-5 h-5" />
        <h1 className="text-2xl font-black tracking-tighter uppercase italic">VOGUE <span className="font-light">COUTURE</span></h1>
        <div className="flex items-center space-x-8">
           <Search className="w-5 h-5 hidden md:block" />
           <button onClick={() => setIsCartOpen(true)} className="relative p-2">
             <ShoppingBag className="w-6 h-6" />
             {cart.length > 0 && <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-[8px] flex items-center justify-center rounded-full">{cart.length}</span>}
           </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row bg-[#faf9f6]">
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
           <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Exclusive Drop — Winter 2024</p>
           <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter italic">Elegance <br/> Unbound.</h2>
           <p className="text-xl text-neutral-500 max-w-md font-light">Explore our curated collection of Italian-made garments, where tradition meets contemporary silhouette.</p>
           <button className="w-fit px-12 py-5 bg-black text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Shop The Collection</button>
        </div>
        <div className="flex-1 bg-neutral-100 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200" className="w-full h-full object-cover" />
          <div className="absolute bottom-10 left-10 p-6 bg-white shadow-2xl animate-bounce-slow">
             <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Featured Item</p>
             <p className="font-black italic">Silk Trench € 2.450</p>
          </div>
        </div>
      </section>

      {/* Product Grid Section (Long Scroll) */}
      <section className="py-40 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-4">
          <h3 className="text-4xl font-black uppercase tracking-tighter">New Arrivals</h3>
          <p className="text-neutral-400">Thoughtfully designed, sustainably sourced.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {[
            { id: 1, n: "The Silk Trench", p: 2450, img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600" },
            { id: 2, n: "Luna Cashmere", p: 1120, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600" },
            { id: 3, n: "Midnight Gown", p: 3800, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600" },
            { id: 4, n: "Azure Blazer", p: 1550, img: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600" },
            { id: 5, n: "Silk Scarf", p: 420, img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600" },
            { id: 6, n: "Leather Tote", p: 1890, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600" }
          ].map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden mb-6">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <button 
                  onClick={() => addToCart(item)}
                  className="absolute bottom-6 left-6 right-6 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                >
                  Quick Add — € {item.p}
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">{item.n}</h4>
                  <p className="text-neutral-400 text-xs italic">Limited Edition</p>
                </div>
                <p className="font-bold text-sm">€ {item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-40 bg-black text-white px-8 md:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
           <h2 className="text-5xl md:text-9xl font-black italic uppercase leading-none tracking-tighter animate-pulse">Sustainability <br/> meets Soul.</h2>
           <p className="text-xl md:text-2xl font-light opacity-60">Every stitch tells a story of craftsmanship and respect for the planet.</p>
           <button className="px-12 py-5 border-2 border-white text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Read Our Manifesto</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 md:px-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">VOGUE</h1>
            <p className="text-neutral-500 max-w-sm">Curating the world's most exquisite fashion experiences since 2012.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-black uppercase text-xs tracking-widest mb-6">Explore</h5>
            <p className="text-neutral-400 hover:text-black cursor-pointer">Collections</p>
            <p className="text-neutral-400 hover:text-black cursor-pointer">Lookbook</p>
            <p className="text-neutral-400 hover:text-black cursor-pointer">Boutiques</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-black uppercase text-xs tracking-widest mb-6">Newsletter</h5>
            <div className="flex border-b border-black pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent outline-none flex-1 text-sm italic" />
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Side Drawer */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 p-10 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex justify-between items-center mb-12 border-b border-neutral-100 pb-8">
             <h3 className="text-2xl font-black uppercase tracking-tighter italic">Your Bag</h3>
             <X className="w-6 h-6 cursor-pointer" onClick={() => setIsCartOpen(false)} />
           </div>
           <div className="flex-1 overflow-auto space-y-10 no-scrollbar">
             {cart.map(item => (
               <div key={item.id} className="flex gap-8">
                 <div className="w-24 aspect-[3/4] bg-neutral-100 overflow-hidden"><img src={item.img} className="w-full h-full object-cover" /></div>
                 <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-bold uppercase text-[10px] tracking-widest">{item.name}</h4>
                      <p className="text-neutral-400 text-[10px] italic">€ {item.price} x {item.qty}</p>
                    </div>
                    <button className="text-[8px] font-black uppercase tracking-widest text-red-500 text-left">Remove</button>
                 </div>
               </div>
             ))}
           </div>
           <div className="mt-auto pt-10 border-t border-neutral-100">
             <div className="flex justify-between mb-8">
               <span className="font-black italic uppercase">Total</span>
               <span className="text-2xl font-black italic">€ {cart.reduce((a,b)=>a+(b.price*b.qty),0).toLocaleString()}</span>
             </div>
             <button className="w-full py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-[10px]">Proceed to Checkout</button>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. NEXUS CREATIVE (TECH-FORWARD AGENCY) ---
export const NexusCreativeDemo = () => {
  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter">NEXUS.LABS</span>
        </div>
        <div className="hidden md:flex space-x-12 text-[10px] font-black uppercase tracking-widest text-white/40">
           <a href="#" className="hover:text-white transition-colors">Vision</a>
           <a href="#" className="hover:text-white transition-colors">Engine</a>
           <a href="#" className="hover:text-white transition-colors">Manifesto</a>
        </div>
        <button className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Start Project</button>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 relative z-10 pt-20">
         <div className="max-w-5xl space-y-12 animate-in zoom-in-95 duration-1000">
           <div className="inline-flex items-center space-x-3 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">
             <Sparkles className="w-4 h-4" />
             <span>Redefining Digital Experiences</span>
           </div>
           <h1 className="text-7xl md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase italic">
             We Architect <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">Velocity.</span>
           </h1>
           <p className="text-xl md:text-3xl text-white/40 font-medium max-w-3xl leading-relaxed italic">
             A high-performance creative collective pushing the boundaries of Web3, AI interaction, and immersive interfaces.
           </p>
           <div className="flex flex-col md:flex-row gap-8 items-start">
             <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 shadow-[0_0_50px_rgba(59,130,246,0.4)]">Launch Console</button>
             <div className="flex items-center space-x-6 pt-2">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center font-black text-xs">P{i}</div>)}
               </div>
               <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Trusted by 40+ Tech Titans</p>
             </div>
           </div>
         </div>
      </section>

      {/* Services Section (Long Scroll with Glassmorphism) */}
      <section className="py-40 px-8 md:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          <div className="space-y-8">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Internal Capabilities</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Our Engine.</h3>
          </div>
          <p className="text-xl text-white/40 leading-relaxed font-medium self-end">We don't just build sites; we build ecosystems. Our stack is optimized for infinite scale and zero friction.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            { t: "AI Synthesis", d: "Custom LLM integrations and automated visual generation workflows.", i: Database },
            { t: "Spatial Web", d: "Immersive 3D environments using Three.js and WebGL frameworks.", i: Globe },
            { t: "Edge Architecture", d: "Global content delivery with sub-50ms latency benchmarks.", i: Zap },
            { t: "Interface Motion", d: "Advanced CSS and GSAP animations for visceral user engagement.", i: Layers }
          ].map((s, i) => (
            <div key={i} className="group p-12 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[40px] hover:bg-white/10 hover:border-blue-500/30 transition-all duration-700">
               <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <s.i className="w-8 h-8 text-blue-500" />
               </div>
               <h4 className="text-3xl font-black uppercase mb-4 tracking-tight">{s.t}</h4>
               <p className="text-white/40 leading-relaxed italic">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section (Large Visuals) */}
      <section className="py-40 relative z-10">
        <div className="px-8 md:px-20 mb-20 flex justify-between items-end">
           <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter italic leading-none">The Archive</h2>
           <ArrowRight className="w-12 h-12 text-white/20 hidden md:block" />
        </div>
        <div className="flex space-x-10 overflow-x-auto no-scrollbar px-8 md:px-20 pb-20">
           {[
             "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200",
             "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
             "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200"
           ].map((img, i) => (
             <div key={i} className="min-w-[80vw] md:min-w-[40vw] aspect-video rounded-[40px] overflow-hidden border border-white/10 group cursor-pointer">
               <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
             </div>
           ))}
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-40 px-8 md:px-20 border-t border-white/5 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">Ready to <br/> Ascend?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-20">
            <div className="text-center group cursor-pointer">
              <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] mb-2">Email</p>
              <p className="text-2xl font-black group-hover:italic transition-all">hello@nexus.labs</p>
            </div>
            <div className="text-center group cursor-pointer">
              <p className="text-purple-500 font-black uppercase tracking-widest text-[10px] mb-2">Twitter / X</p>
              <p className="text-2xl font-black group-hover:italic transition-all">@nexus_labs</p>
            </div>
          </div>
          <p className="text-white/10 font-black uppercase tracking-[0.5em] text-xs pt-20">© 2024 NEXUS CREATIVE SYSTEMS — ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};
