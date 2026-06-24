import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ProjectCardComponent } from '../ui/project-card/project-card.component';
import { SectionTitleComponent } from '../../../shared/ui/section-title/section-title.component';
import { PROJECTS, type Project } from '../../../shared/constants/portfolio.constants';

type FilterKey = 'all' | 'live' | 'in-progress' | 'coming-soon';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent, SectionTitleComponent],
  template: `
    <div class="min-h-screen bg-bg-base py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          number="03"
          filename="proyectos/"
          title="Lo que he construido, construyo y construiré."
        />

        <!-- Filtros -->
        <div class="flex flex-wrap gap-2 mb-10">
          @for (filter of filters; track filter.key) {
            <button
              (click)="activeFilter.set(filter.key)"
              [class]="activeFilter() === filter.key
                ? 'font-mono text-xs px-4 py-2 rounded border border-accent text-accent bg-accent/10'
                : 'font-mono text-xs px-4 py-2 rounded border border-border text-text-muted hover:border-border-hover hover:text-text-body transition-colors duration-200'"
              [attr.aria-pressed]="activeFilter() === filter.key"
            >
              {{ filter.label }} {{ filter.count }}
            </button>
          }
        </div>

        <!-- Grid de proyectos -->
        @if (filteredProjects().length > 0) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            @for (project of filteredProjects(); track project.id) {
              <app-project-card [project]="project" />
            }
          </div>
        } @else {
          <div class="text-center py-24">
            <p class="font-mono text-text-muted">// sin proyectos en esta categoría</p>
          </div>
        }
      </div>
    </div>
  `,
})
export class ProjectsPageComponent {
  protected readonly activeFilter = signal<FilterKey>('all');

  protected readonly filteredProjects = computed<Project[]>(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.status === filter);
  });

  protected readonly filters = [
    { key: 'all' as FilterKey, label: 'Todos', count: PROJECTS.length },
    { key: 'in-progress' as FilterKey, label: 'En proceso', count: PROJECTS.filter(p => p.status === 'in-progress').length },
    { key: 'live' as FilterKey, label: 'Terminados', count: PROJECTS.filter(p => p.status === 'live').length },
    { key: 'coming-soon' as FilterKey, label: 'Por llegar', count: PROJECTS.filter(p => p.status === 'coming-soon').length },
  ];
}
