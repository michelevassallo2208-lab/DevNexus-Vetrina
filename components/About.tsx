
import React from 'react';
import { SKILLS } from '../constants';

interface AboutProps {
  t: any;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-32 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square rounded-[36px] overflow-hidden border border-white/10 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Michele - DevNexus" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-slate-950 p-10 rounded-3xl border border-white/5 shadow-2xl flex flex-col items-center">
              <p className="text-6xl font-black text-white mb-1 leading-none">27</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black text-center">{t.about.ageBadge}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-6">{t.about.badge}</h2>
            <h3 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter">{t.about.title}</h3>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              {t.about.text}
            </p>

            <div className="space-y-10">
              {[
                { title: t.about.devExp, cat: 'Development' },
                { title: t.about.sysExp, cat: 'Systems' }
              ].map(section => (
                <div key={section.cat}>
                  <h4 className="text-white text-sm font-black uppercase tracking-widest mb-6 flex items-center">
                    <span className="w-8 h-px bg-blue-600 mr-4"></span>
                    {section.title}
                  </h4>
                  <div className="space-y-6">
                    {SKILLS.filter(s => s.category === section.cat).slice(0, 3).map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs font-bold mb-2">
                          <span className="text-slate-300 uppercase tracking-tighter">{skill.name}</span>
                          <span className="text-blue-500">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
