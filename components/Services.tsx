
import React from 'react';
import { SERVICE_ICONS } from '../constants';

interface ServicesProps {
  t: any;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-600/5 blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs font-black text-purple-500 uppercase tracking-[0.4em] mb-6">{t.services.badge}</h2>
          <h3 className="text-6xl font-black text-white mb-8 leading-none tracking-tighter">{t.services.title}</h3>
          <p className="text-xl text-slate-400 font-medium">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {t.services.items.map((service: any, index: number) => (
            <div key={index} className="group p-10 bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[40px] hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-slate-950 rounded-[28px] flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                {SERVICE_ICONS[index]}
              </div>
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">{service.title}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
