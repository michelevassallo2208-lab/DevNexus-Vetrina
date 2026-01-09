
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language } from '../translations';
import Logo from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ];

  const currentLangLabel = languages.find(l => l.code === lang)?.label;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-slate-950/90 backdrop-blur-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3 group outline-none">
          <Logo className="w-12 h-12" />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white leading-none">DEVNEXUS</span>
            <span className="text-[10px] tracking-[0.4em] font-black text-blue-500 uppercase mt-1">Architecture</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-1">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-slate-400 hover:text-white px-4 py-2 transition-all text-xs font-black uppercase tracking-widest relative group rounded-lg hover:bg-white/5"
              >
                {t.nav[key]}
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-white/10"></div>

          {/* Lang Switcher */}
          <div className="relative group/lang">
            <button 
              onMouseEnter={() => setShowLangDropdown(true)}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors py-2"
            >
              <Globe className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-tighter">{lang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showLangDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showLangDropdown && (
              <div 
                onMouseLeave={() => setShowLangDropdown(false)}
                className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2 duration-300"
              >
                <div className="p-2 space-y-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setShowLangDropdown(false); }}
                      className={`w-full text-left px-4 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-between group/item ${lang === l.code ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                    >
                      <span>{l.label}</span>
                      <span className="opacity-50 text-base">{l.flag}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-95 transition-all"
          >
            {t.nav.hire}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-6">
          <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-0 left-0 w-full h-screen bg-slate-950 z-[60] p-8 transition-transform duration-500 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-16">
          <Logo className="w-12 h-12" />
          <button className="text-white" onClick={() => setIsOpen(false)}><X className="w-10 h-10" /></button>
        </div>
        <div className="flex flex-col space-y-8">
          {['home', 'about', 'services', 'portfolio', 'contact'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-white text-5xl font-black tracking-tighter uppercase"
              onClick={() => setIsOpen(false)}
            >
              {t.nav[key]}
            </a>
          ))}
          <div className="pt-10 border-t border-white/5 grid grid-cols-5 gap-4">
            {languages.map(l => (
               <button 
                key={l.code}
                onClick={() => { setLang(l.code); setIsOpen(false); }}
                className={`p-4 rounded-2xl border ${lang === l.code ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900 border-white/5 text-slate-400'}`}
               >
                 <span className="text-2xl">{l.flag}</span>
               </button>
            ))}
          </div>
          <a
            href="https://fiverr.com"
            className="w-full text-center py-6 bg-white text-slate-950 rounded-3xl font-black text-xl uppercase tracking-widest mt-auto"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
