
import React from 'react';
import { Mail, Send, CheckCircle, ExternalLink } from 'lucide-react';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[60px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-gradient-to-br from-blue-600/10 to-transparent">
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                {t.contact.title}
              </h2>
              <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                {t.contact.subtitle}
              </p>

              <div className="space-y-8 mb-16">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Mail className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{t.contact.email}</p>
                    <p className="text-white text-xl font-bold">michele@devnexus.it</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <CheckCircle className="text-emerald-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{t.contact.support}</p>
                    <p className="text-white text-xl font-bold">{t.contact.supportText}</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-blue-600 rounded-[40px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-16 -mt-16 group-hover:bg-white/20 transition-colors"></div>
                <h4 className="text-2xl font-black text-white mb-4 leading-tight">{t.contact.fiverrTitle}</h4>
                <p className="text-blue-100 mb-8 italic font-medium opacity-80">"Michele delivered exceptional results. A true full-stack expert who understands infrastructure deeply."</p>
                <a href="https://fiverr.com" className="w-full py-5 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-slate-100 transition-all transform active:scale-95 shadow-xl">
                  <span>{t.contact.fiverrCta}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-12 lg:p-20 bg-slate-950/50">
              <h3 className="text-3xl font-black text-white mb-10 tracking-tight">{t.contact.formTitle}</h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">{t.contact.name}</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">{t.contact.subject}</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">{t.contact.message}</label>
                  <textarea rows={5} placeholder="Tell me about your vision..." className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all font-medium resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:opacity-90 transition-opacity transform active:scale-95">
                  <span>{t.contact.send}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
