
import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Zap,
  Layout,
  Database,
  Lock
} from 'lucide-react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CloudStack Automator',
    description: 'Advanced orchestration platform using Terraform & Ansible for multi-region hybrid cloud management.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    tags: ['Terraform', 'Go', 'AWS', 'Ansible'],
    link: 'https://www.terraform.io/'
  },
  {
    id: 2,
    title: 'Astra Finance Dashboard',
    description: 'High-performance real-time trading dashboard with micro-frontend architecture and WebSockets.',
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'D3.js', 'Redis', 'Node.js'],
    link: 'https://v0.dev'
  },
  {
    id: 3,
    title: 'Nexus-Monitor Pro',
    description: 'Enterprise server monitoring tool featuring predictive analytics and AI-driven alerting.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'Docker', 'Grafana', 'InfluxDB'],
    link: 'https://grafana.com/'
  },
  {
    id: 4,
    title: 'LuxDesign Luxury Store',
    description: 'Ultra-fast e-commerce experience for high-end fashion brands with headless CMS and 3D previews.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Three.js', 'Shopify', 'GSAP'],
    link: 'https://stripe.com/it'
  },
  {
    id: 5,
    title: 'SecureNode VPN Client',
    description: 'Desktop application with custom WireGuard implementation and military-grade encryption UI.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    tags: ['Rust', 'Tauri', 'TypeScript', 'WireGuard'],
    link: 'https://www.wireguard.com/'
  },
  {
    id: 6,
    title: 'Quantum Code Hub',
    description: 'Collaborative code editing environment with real-time peer-to-peer syncing and AI integration.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
    tags: ['WebRTC', 'Monaco Editor', 'React', 'Zustand'],
    link: 'https://codesandbox.io/'
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

export const SERVICE_ICONS = [
  <Globe className="w-8 h-8 text-blue-400" />,
  <Server className="w-8 h-8 text-purple-400" />,
  <Cpu className="w-8 h-8 text-emerald-400" />,
  <ShieldCheck className="w-8 h-8 text-red-400" />
];
