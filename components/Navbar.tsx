
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
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

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3 group">
          <Logo className="w-11 h-11" />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white leading-none">DEVNEXUS</span>
            <span className="text-[10px] tracking-[0.3em] font-bold text-blue-500 uppercase mt-1">Michele</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-slate-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest relative group"
              >
                {t.nav[key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-white/10 mx-2"></div>

          {/* Lang Switcher */}
          <div className="relative">
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-tighter">{lang}</span>
            </button>
            
            {showLangDropdown && (
              <div className="absolute top-full right-0 mt-4 w-40 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setShowLangDropdown(false); }}
                    className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-slate-800 transition-colors ${lang === l.code ? 'text-blue-500' : 'text-slate-400'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all"
          >
            {t.nav.hire}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="text-slate-400"
            >
              <Globe className="w-5 h-5" />
            </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-slate-950 z-40 p-8 flex flex-col space-y-8">
          {['home', 'about', 'services', 'portfolio', 'contact'].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-white text-3xl font-black tracking-tighter uppercase"
              onClick={() => setIsOpen(false)}
            >
              {t.nav[key]}
            </a>
          ))}
          <a
            href="https://fiverr.com"
            className="w-full text-center py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-tighter"
          >
            {t.nav.hire}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
