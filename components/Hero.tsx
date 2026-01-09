
import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Dynamic backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] bg-purple-600/10 rounded-full blur-[160px] animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-pulse"></span>
            <span>{t.hero.badge}</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            {t.hero.title1} <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 italic">
              {t.hero.title2}
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#portfolio" className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-tighter text-lg flex items-center justify-center transition-all shadow-2xl shadow-blue-600/40 hover:-translate-y-1">
              {t.hero.cta1}
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-10 py-5 bg-slate-900/50 hover:bg-slate-800 border border-white/5 backdrop-blur-md text-white rounded-2xl font-black uppercase tracking-tighter text-lg flex items-center justify-center transition-all hover:-translate-y-1">
              {t.hero.cta2}
            </a>
          </div>
          
          <div className="mt-16 flex items-center space-x-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden ring-1 ring-white/10">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-full h-full object-cover" alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-500 tracking-tight">
              <span className="text-white text-lg block leading-none">50+</span> 
              {t.hero.stats}
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative perspective-1000">
          <div className="relative z-10 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-1000 overflow-hidden">
            <div className="flex items-center space-x-3 mb-6 border-b border-white/5 pb-5">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
              </div>
              <span className="text-[10px] text-slate-500 mono ml-4 tracking-widest font-bold">~/michele/devnexus</span>
            </div>
            
            <div className="mono text-sm space-y-4 leading-relaxed">
              <div className="flex space-x-2">
                <span className="text-blue-500 font-bold">$</span>
                <span className="text-slate-300">whoami</span>
              </div>
              <div className="pl-5 border-l border-blue-500/30">
                <p className="text-emerald-400 font-bold italic">Michele "The Architect"</p>
                <p className="text-slate-400 text-xs mt-1">Status: High Intensity Creator</p>
                <p className="text-slate-400 text-xs">Uptime: 27 Years</p>
              </div>

              <div className="flex space-x-2">
                <span className="text-blue-500 font-bold">$</span>
                <span className="text-slate-300">ls core_strengths/</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-5">
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-[10px] font-bold">Scalability.exe</span>
                <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded text-[10px] font-bold">Design_UX.sh</span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[10px] font-bold">Security.lock</span>
              </div>

              <div className="flex space-x-2 pt-4">
                <span className="text-blue-500 font-bold">$</span>
                <span className="text-slate-300 animate-pulse font-black">|</span>
              </div>
            </div>

            {/* Reflection flare */}
            <div className="absolute -top-full -left-full w-full h-[300%] bg-gradient-to-br from-white/5 to-transparent rotate-45 pointer-events-none"></div>
          </div>
          
          {/* Decorative floating widgets */}
          <div className="absolute -top-10 -right-10 z-20 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 p-5 rounded-2xl shadow-2xl animate-bounce-slow">
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-1">Health Score</p>
            <p className="text-3xl font-black text-white">100/100</p>
          </div>
          
          <div className="absolute -bottom-6 -left-10 z-20 bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 p-5 rounded-2xl shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Terminal className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Server Uptime</p>
                <p className="text-xl font-black text-white">99.999%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
