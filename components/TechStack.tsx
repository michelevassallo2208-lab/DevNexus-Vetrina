
import React from 'react';
import { FRAMEWORKS } from '../constants';

interface TechStackProps {
  t: any;
}

const TechStack: React.FC<TechStackProps> = ({ t }) => {
  return (
    <section className="py-24 bg-slate-950/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-3">{t.tech.badge}</h2>
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">{t.tech.title}</h3>
          </div>
          <p className="text-slate-500 text-sm font-medium max-w-sm text-center md:text-right">
            {t.tech.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {FRAMEWORKS.map((fw, i) => (
            <div 
              key={i} 
              className="group p-6 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-500">
                {fw.icon}
              </div>
              <div>
                <p className="text-white text-[10px] font-black uppercase tracking-widest">{fw.name}</p>
                <p className="text-slate-500 text-[8px] font-bold uppercase tracking-tighter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{fw.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
