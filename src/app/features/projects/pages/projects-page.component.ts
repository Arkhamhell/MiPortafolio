import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ProjectCardComponent } from '../ui/project-card/project-card.component';
import { SectionTitleComponent } from '../../../shared/ui/section-title/section-title.component';
import { type Project, type ProjectStatus } from '../models/project.model';

type FilterOption = 'all' | ProjectStatus;

interface FilterTab {
  value: FilterOption;
  label: string;
}

const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Proyecto #1',
    description: 'Próximamente. Un proyecto full stack desarrollado con Angular y .NET que demuestra arquitectura moderna y buenas prácticas.',
    techStack: ['Angular', '.NET', 'SQL Server', 'TypeScript'],
    status: 'coming-soon'
  },
  {
    id: 2,
    title: 'Proyecto #2',
    description: 'Próximamente. Aplicación web con interfaz de usuario moderna, rendimiento optimizado y experiencia de usuario fluida.',
    techStack: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
    status: 'coming-soon'
  },
  {
    id: 3,
    title: 'Proyecto #3',
    description: 'Próximamente. Solución backend con ASP.NET Core, arquitectura limpia y API RESTful bien documentada.',
    techStack: ['ASP.NET Core', 'C#', 'Entity Framework', 'PostgreSQL'],
    status: 'coming-soon'
  },
  {
    id: 4,
    title: 'Proyecto #4',
    description: 'Próximamente. Integración de servicios cloud con Azure y CI/CD para entrega continua de valor.',
    techStack: ['Angular', '.NET', 'Azure', 'Docker'],
    status: 'coming-soon'
  },
  {
    id: 5,
    title: 'Proyecto #5',
    description: 'Próximamente. Sistema con autenticación, roles y permisos, construido sobre arquitectura de microservicios.',
    techStack: ['.NET', 'C#', 'SQL Server', 'Azure'],
    status: 'coming-soon'
  },
  {
    id: 6,
    title: 'Proyecto #6',
    description: 'Próximamente. Dashboard interactivo con visualizaciones de datos en tiempo real y análisis avanzado.',
    techStack: ['Angular', 'TypeScript', '.NET', 'SignalR'],
    status: 'coming-soon'
  }
];

@Component({
  selector: 'app-projects-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent, SectionTitleComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          title="Proyectos"
          subtitle="Trabajos destacados, proyectos personales y contribuciones"
        />

        <!-- Filter tabs -->
        <div class="flex items-center justify-center gap-2 mb-12 flex-wrap">
          @for (tab of filterTabs; track tab.value) {
            <button
              (click)="setFilter(tab.value)"
              [class.bg-indigo-600]="activeFilter() === tab.value"
              [class.dark:bg-indigo-500]="activeFilter() === tab.value"
              [class.text-white]="activeFilter() === tab.value"
              [class.border-transparent]="activeFilter() === tab.value"
              [class.bg-white]="activeFilter() !== tab.value"
              [class.dark:bg-gray-900]="activeFilter() !== tab.value"
              [class.text-gray-600]="activeFilter() !== tab.value"
              [class.dark:text-gray-400]="activeFilter() !== tab.value"
              [class.border-gray-200]="activeFilter() !== tab.value"
              [class.dark:border-gray-700]="activeFilter() !== tab.value"
              class="px-5 py-2 text-sm font-medium rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
              [attr.aria-pressed]="activeFilter() === tab.value"
            >
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Projects grid -->
        @if (filteredProjects().length > 0) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (project of filteredProjects(); track project.id) {
              <app-project-card [project]="project" />
            }
          </div>
        } @else {
          <div class="text-center py-24">
            <p class="text-gray-500 dark:text-gray-400 text-lg">No hay proyectos en esta categoría aún.</p>
          </div>
        }
      </div>
    </div>
  `
})
export class ProjectsPageComponent {
  protected readonly activeFilter = signal<FilterOption>('all');

  protected readonly filterTabs: FilterTab[] = [
    { value: 'all', label: 'Todos' },
    { value: 'live', label: 'Publicados' },
    { value: 'in-progress', label: 'En desarrollo' },
    { value: 'coming-soon', label: 'Próximamente' }
  ];

  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.status === filter);
  });

  setFilter(filter: FilterOption): void {
    this.activeFilter.set(filter);
  }
}
