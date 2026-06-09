export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  badgeClass: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  status: 'live' | 'in-progress' | 'coming-soon';
  githubUrl?: string;
  liveUrl?: string;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '⚡',
    badgeClass: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
    skills: [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'RxJS' },
      { name: 'SCSS / CSS' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5' }
    ]
  },
  {
    category: 'Backend',
    icon: '🔷',
    badgeClass: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
    skills: [
      { name: '.NET / C#' },
      { name: 'ASP.NET Core' },
      { name: 'Entity Framework' },
      { name: 'REST APIs' },
      { name: 'SQL Server' },
      { name: 'PostgreSQL' }
    ]
  },
  {
    category: 'Herramientas',
    icon: '🛠️',
    badgeClass: 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Docker' },
      { name: 'Azure' },
      { name: 'CI/CD' },
      { name: 'Postman' },
      { name: 'Agile / Scrum' }
    ]
  }
];

export const PLACEHOLDER_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Proyecto #1',
    description: 'Próximamente. Un proyecto desarrollado con Angular y .NET que muestra mis habilidades full stack.',
    techStack: ['Angular', '.NET', 'SQL Server'],
    status: 'coming-soon'
  },
  {
    id: 2,
    title: 'Proyecto #2',
    description: 'Próximamente. Aplicación web moderna con arquitectura limpia y buenas prácticas.',
    techStack: ['Angular', 'TypeScript', 'SCSS'],
    status: 'coming-soon'
  },
  {
    id: 3,
    title: 'Proyecto #3',
    description: 'Próximamente. Solución backend robusta con ASP.NET Core y Entity Framework.',
    techStack: ['ASP.NET Core', 'C#', 'PostgreSQL'],
    status: 'coming-soon'
  }
];
