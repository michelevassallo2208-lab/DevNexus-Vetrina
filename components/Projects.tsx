
import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  t: any;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
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
          <a href="#" className="flex items-center space-x-3 text-white font-black uppercase tracking-tighter text-lg group">
            <span className="border-b-2 border-white/10 group-hover:border-blue-500 transition-colors">{t.portfolio.viewAll}</span>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative flex flex-col h-full bg-slate-900/50 backdrop-blur-sm rounded-[32px] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
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
                  <a href={project.link} className="flex items-center text-white text-xs font-black uppercase tracking-widest group/link">
                    {t.portfolio.preview}
                    <div className="ml-2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-slate-950 transition-all">
                       <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>
                  <div className="flex space-x-3">
                    <button className="p-2.5 text-slate-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
