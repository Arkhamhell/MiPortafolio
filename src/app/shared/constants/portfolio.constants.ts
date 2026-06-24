// TODO: reemplazar con datos reales de Manuel Gatica

export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  label: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  status: 'live' | 'in-progress' | 'coming-soon';
  progress?: number;
  year?: string;
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  npmUrl?: string;
}

export interface ExperienceEntry {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  isCurrent: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '6+', label: 'Proyectos entregados' },
  { value: '40+', label: 'Componentes creados' },
  { value: '12', label: 'Tecnologías dominadas' },
  { value: '99.9%', label: 'Uptime promedio' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    label: 'frontend',
    skills: [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'RxJS' },
      { name: 'Tailwind CSS' },
      { name: 'SCSS' },
      { name: 'HTML5' },
      { name: 'React' },
      { name: 'NextJS' },
    ],
  },
  {
    category: 'Backend',
    label: 'backend',
    skills: [
      { name: '.NET / C#' },
      { name: 'ASP.NET Core' },
      { name: 'Entity Framework' },
      { name: 'REST APIs' },
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'MongoDb' },
      { name: 'Redis' },
      { name: 'Kafka' }

    ],
  },
  {
    category: 'Infra & Tools',
    label: 'infra & tools',
    skills: [
      { name: 'Claude Code' },
      { name: 'Bucket R2 Cloudfare' },
      { name: 'Docker' },
      { name: 'Azure' },
      { name: 'CI/CD' },
      { name: 'Postman' },
      { name: 'Agile / Scrum' },
    ],
  },
  {
    category: 'IA & LLMs',
    label: 'ia & llms',
    skills: [
      { name: 'Claude' },
      { name: 'Gemini' },
      { name: 'Claude Code' },
      { name: 'Prompt Engineering' },
      { name: 'LLM APIs' },
      { name: 'RAG' },
    ],
  },
];

export const PROJECTS: Project[] = [
  
{
  id: 7,
  title: 'Crea tu espacio',
  description: 'Marketplace de arriendo de boxes para profesionales independientes.',
  techStack: ['React', 'NestJs', 'PostgreSQL' , 'Redis' , 'Prisma' , 'Cloudfare'],  // tus tecnologías reales
  status: 'in-progress', 
  progress: 30,     
  year: '2026',
  liveUrl: 'https://crea-tu-espacio-web.vercel.app/',  // si quieres mostrar "Ver sitio ↗"
  },
  {
    id: 8,
    title: 'AI Dev Assistant',
    description: 'Asistente de desarrollo con IA integrado en el flujo de trabajo. Usa Claude y Gemini para generación de código, revisiones técnicas y automatización de tareas repetitivas.',
    techStack: ['Claude', 'Gemini', 'TypeScript', 'Angular'],
    status: 'coming-soon',
    progress: 40,
    year: '2026'
  },
  // {
  //   id: 1,
  //   title: 'Orbital',
  //   description: 'Dashboard de monitoreo en tiempo real para infraestructura cloud. Visualización de métricas, alertas y logs con actualización via SignalR.',
  //   techStack: ['Angular', '.NET', 'SignalR', 'Azure', 'SQL Server'],
  //   status: 'in-progress',
  //   progress: 70,
  //   year: '2025',
  //   githubUrl: 'https://github.com/mgatica',
  // },
  // {
  //   id: 2,
  //   title: 'Lumen UI',
  //   description: 'Librería de componentes Angular accesibles y tematizables, publicada en npm. Incluye 20+ componentes con soporte para Tailwind CSS.',
  //   techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Storybook'],
  //   status: 'in-progress',
  //   progress: 45,
  //   year: '2025',
  //   githubUrl: 'https://github.com/mgatica',
  //   npmUrl: 'https://npmjs.com',
  // },
  // {
  //   id: 3,
  //   title: 'Cobalt',
  //   description: 'API REST para gestión de inventario con autenticación JWT, roles granulares y exportación a Excel/PDF. Desplegado en Azure App Service.',
  //   techStack: ['ASP.NET Core', 'C#', 'Entity Framework', 'PostgreSQL', 'Azure'],
  //   status: 'live',
  //   year: '2024',
  //   githubUrl: 'https://github.com/mgatica',
  //   liveUrl: 'https://cobalt-api.azurewebsites.net',
  // },
  // {
  //   id: 4,
  //   title: 'Forge CLI',
  //   description: 'Herramienta de línea de comandos para scaffolding de proyectos Angular con arquitectura hexagonal preconfigurada y opinionada.',
  //   techStack: ['Node.js', 'TypeScript', 'Commander.js'],
  //   status: 'coming-soon',
  //   year: '2026',
  // },
  // {
  //   id: 5,
  //   title: 'Nexus Auth',
  //   description: 'Servicio de autenticación centralizado con OAuth 2.0, soporte para MFA y panel de administración de sesiones activas.',
  //   techStack: ['.NET', 'C#', 'Redis', 'Docker', 'PostgreSQL'],
  //   status: 'coming-soon',
  //   year: '2026',
  // },
  // {
  //   id: 6,
  //   title: 'Chrono',
  //   description: 'Aplicación de productividad para gestión del tiempo con reportes semanales, integración con calendarios y modo Pomodoro.',
  //   techStack: ['Angular', 'TypeScript', 'RxJS', 'IndexedDB'],
  //   status: 'coming-soon',
  //   year: '2026',
  // },

];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Travel Security',
    period: '2024 — presente',
    description: 'Ingeniero Full-Stack especializado en modernización de plataformas empresariales, liderando el desarrollo del dashboard de reservas hoteleras con Angular 18/20 y consolidando la evolución tecnológica del frontend. Experiencia integral en arquitectura backend con .NET/.NET Framework, seguridad empresarial (JWT, Azure AD, Key Vault) e integraciones estratégicas con sistemas legacy (VB6). Experto en optimización de bases de datos (SQL Server, MongoDB, Redis) y metodologías ágiles (Scrum, Azure DevOps), con enfoque en entrega de soluciones escalables, mantenibles y orientadas a usuario final.',
    tags: ['Angular', '.NET', 'Azure', 'SQL Server', 'CI/CD', 'MongoDb', 'Redis', 'Bootstrap', 'Tailwind CSS' , 'Angular Material'],
    isCurrent: true,
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Backline Soluciones Integrales',
    period: '2022 — 2023',
    description: 'Desarrollador Full-Stack especializado en ASP.NET MVC y Angular 11, con experticia en la creación de aplicaciones web empresariales de alto rendimiento. Dominio completo del stack frontend (JavaScript, jQuery, Bootstrap, HTML5, CSS3) y backend, con énfasis en optimización de bases de datos SQL Server y garantía de disponibilidad en entornos corporativos. Trayectoria sólida en mantenimiento evolutivo y correcciones de plataformas críticas, con capacidad demostrada para mejorar tiempos de respuesta y eficiencia operacional.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Bootstrap', 'Jquery', 'JavaScript', 'HTML' , 'ASP.NET', 'SQL Server'],
    isCurrent: false,
  },
];
