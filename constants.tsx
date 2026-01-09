
import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Globe,
  Code2,
  Zap,
  Box,
  Layers,
  Terminal,
  Database,
  Infinity
} from 'lucide-react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Monolith Architecture',
    description: 'Sito vetrina ultra-premium con sezioni a scorrimento lungo, gallerie artistiche e design brutalista.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    tags: ['Minimalismo', 'Luxury', 'Animazioni'],
    link: 'noir'
  },
  {
    id: 2,
    title: 'Vogue Couture Shop',
    description: 'E-commerce di alta moda completo di carrello interattivo, schede prodotto editoriali e catalogo fluido.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800',
    tags: ['E-Commerce', 'Fashion', 'Carrello'],
    link: 'velvet'
  },
  {
    id: 3,
    title: 'Nexus Creative Labs',
    description: 'Sito agenzia tech-forward con glassmorphism, gradienti neon e sezioni interattive ad alto impatto.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800',
    tags: ['Futuristico', 'Tech', 'Immersivo'],
    link: 'aether'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Development' },
  { name: 'TypeScript', level: 92, category: 'Development' },
  { name: 'Node.js / Go', level: 88, category: 'Development' },
  { name: 'Linux Kernel/SysAdmin', level: 98, category: 'Systems' },
  { name: 'Docker / K8s', level: 90, category: 'Systems' },
  { name: 'Infrastructure as Code', level: 94, category: 'Systems' },
  { name: 'CI/CD Pipelines', level: 85, category: 'DevOps' },
  { name: 'Cybersecurity Hardening', level: 82, category: 'DevOps' },
];

export const FRAMEWORKS = [
  { name: 'React', icon: <Layers className="w-6 h-6 text-[#61DAFB]" />, desc: 'UI Library' },
  { name: 'Next.js', icon: <Box className="w-6 h-6 text-white" />, desc: 'React Framework' },
  { name: 'Vite', icon: <Zap className="w-6 h-6 text-[#FFD62E]" />, desc: 'Frontend Tooling' },
  { name: 'Node.js', icon: <Terminal className="w-6 h-6 text-[#339933]" />, desc: 'JS Runtime' },
  { name: 'Tailwind', icon: <Globe className="w-6 h-6 text-[#06B6D4]" />, desc: 'CSS Framework' },
  { name: 'TypeScript', icon: <Code2 className="w-6 h-6 text-[#3178C6]" />, desc: 'Static Typing' },
  { name: 'PostgreSQL', icon: <Database className="w-6 h-6 text-[#4169E1]" />, desc: 'Database' },
  { name: 'Docker', icon: <Infinity className="w-6 h-6 text-[#2496ED]" />, desc: 'Containerization' },
];

export const SERVICE_ICONS = [
  <Globe className="w-8 h-8 text-blue-400" />,
  <Server className="w-8 h-8 text-purple-400" />,
  <Cpu className="w-8 h-8 text-emerald-400" />,
  <ShieldCheck className="w-8 h-8 text-red-400" />
];
