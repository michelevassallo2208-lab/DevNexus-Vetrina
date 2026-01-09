
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Language, translations } from './translations';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Logo className="w-12 h-12" />
                <span className="text-3xl font-black tracking-tighter text-white">DEVNEXUS</span>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                Architecting high-performance digital experiences with a systems-first mindset. Available for specialized consulting and full-stack development globally.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-6">Navigation</h5>
              <ul className="space-y-4">
                {['home', 'about', 'services', 'portfolio'].map(key => (
                  <li key={key}>
                    <a href={`#${key}`} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">{t.nav[key]}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-6">Social Connect</h5>
              <ul className="space-y-4">
                {['LinkedIn', 'Github', 'Instagram', 'Telegram'].map(social => (
                  <li key={social}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">{social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 space-y-6 md:space-y-0">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} DEVNEXUS • CREATED BY MICHELE
            </p>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em]">Privacy Policy</a>
              <a href="#" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em]">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
