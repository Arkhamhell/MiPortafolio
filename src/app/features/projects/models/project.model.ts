export type ProjectStatus = 'live' | 'in-progress' | 'coming-soon';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
}
