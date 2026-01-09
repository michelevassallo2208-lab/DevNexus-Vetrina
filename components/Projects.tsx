
import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, X, Monitor, Smartphone, RefreshCw, Globe, MousePointer2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { MonolithDemo, VogueDemo, NexusCreativeDemo } from './ProjectDemos';

interface ProjectsProps {
  t: any;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const openPreview = (link: string) => {
    setActivePreview(link);
    setIsPreviewLoading(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setIsPreviewLoading(false), 1500); 
  };

  const closePreview = () => {
    setActivePreview(null);
    document.body.style.overflow = 'auto';
  };

  const renderDemo = () => {
    switch (activePreview) {
      case 'noir': return <MonolithDemo />;
      case 'velvet': return <VogueDemo />;
      case 'aether': return <NexusCreativeDemo />;
      default: return null;
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-6">{t.portfolio.badge}</h2>
            <h3 className="text-6xl font-black text-white leading-none tracking-tighter">{t.portfolio.title}</h3>
            <p className="text-xl text-slate-400 mt-6 font-medium leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-slate-500 font-black uppercase tracking-widest text-[10px]">
            <MousePointer2 className="w-4 h-4 text-emerald-500 animate-bounce" />
            <span>Click to explore the Full Sites</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative flex flex-col h-full bg-slate-900/50 backdrop-blur-sm rounded-[32px] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => openPreview(project.link)}>
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none flex flex-col items-center justify-center space-y-4">
                   <div className="px-6 py-3 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     {t.portfolio.preview}
                   </div>
                   <p className="text-[10px] text-white font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity delay-100 italic">Interattività Completa</p>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{project.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <button 
                    onClick={() => openPreview(project.link)}
                    className="flex items-center text-white text-xs font-black uppercase tracking-widest group/link outline-none"
                  >
                    {t.portfolio.preview}
                    <div className="ml-2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-slate-950 transition-all">
                       <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </button>
                  <button 
                    onClick={() => openPreview(project.link)}
                    className="p-2.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Monitor className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Preview Modal */}
      {activePreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={closePreview}></div>
          
          <div className="relative w-full h-full max-w-6xl bg-slate-900 border border-white/10 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transform animate-in zoom-in-95 duration-500">
            {/* Modal Header / Browser Bar */}
            <div className="bg-slate-800/50 border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex space-x-2">
                  <button onClick={closePreview} className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors outline-none"></button>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/20"></div>
                </div>
                <div className="hidden md:flex items-center bg-slate-950 px-4 py-2 rounded-xl border border-white/5 min-w-[200px]">
                  <Globe className="w-3 h-3 text-slate-500 mr-3" />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest truncate">preview.devnexus.it/{activePreview}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex bg-slate-950 p-1 rounded-xl border border-white/5">
                  <button 
                    onClick={() => setViewMode('desktop')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('mobile')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
                <button onClick={closePreview} className="p-2 text-slate-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content Container - Fixed scrolling issue by using overflow-y-auto on the wrapper */}
            <div className="flex-1 bg-slate-950 relative overflow-y-auto overflow-x-hidden no-scrollbar">
              {isPreviewLoading && (
                <div className="sticky top-0 left-0 w-full h-full flex items-center justify-center bg-slate-950 z-[110]">
                  <div className="flex flex-col items-center">
                    <RefreshCw className="w-10 h-10 text-blue-500 animate-spin mb-4" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Instantiating Virtual DOM...</p>
                  </div>
                </div>
              )}
              
              <div className={`mx-auto transition-all duration-700 ease-in-out shadow-2xl ${viewMode === 'desktop' ? 'w-full' : 'w-[375px] my-10 rounded-[40px] border-[8px] border-slate-800 overflow-hidden'}`}>
                {renderDemo()}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
