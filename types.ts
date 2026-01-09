
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Development' | 'Systems' | 'DevOps';
}

export interface NavItem {
  label: string;
  href: string;
}
