import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { PLACEHOLDER_PROJECTS, type Project } from '../../../../shared/constants/portfolio.constants';

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section id="projects" class="py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          title="Proyectos"
          subtitle="Trabajos destacados y proyectos en desarrollo"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          @for (project of projects; track project.id) {
            <article class="group bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg hover:shadow-indigo-500/8 hover:-translate-y-1 transition-all duration-300">
              <!-- Card image area -->
              <div class="h-44 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                <div class="absolute inset-0 [background-image:linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] [background-size:2rem_2rem]"></div>
                <span class="relative px-3.5 py-1.5 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200 dark:border-indigo-700">
                  Próximamente
                </span>
              </div>

              <div class="p-6">
                <h3 class="text-base font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  @for (tech of project.techStack; track tech) {
                    <span class="px-2.5 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <!-- View all CTA -->
        <div class="text-center">
          <a routerLink="/projects"
             class="inline-flex items-center gap-2 px-6 py-3 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 transition-all duration-200 hover:-translate-y-0.5">
            Ver todos los proyectos
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ProjectsPreviewComponent {
  protected readonly projects: Project[] = PLACEHOLDER_PROJECTS;
}
