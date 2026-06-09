import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { type Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-xl hover:shadow-indigo-500/8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">

      <!-- Image/preview area -->
      <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden flex-shrink-0">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
        <div class="absolute inset-0 [background-image:linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] [background-size:2rem_2rem]"></div>

        @switch (project().status) {
          @case ('coming-soon') {
            <span class="relative px-4 py-1.5 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200 dark:border-indigo-700">
              Próximamente
            </span>
          }
          @case ('in-progress') {
            <span class="relative px-4 py-1.5 text-xs font-semibold bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-700 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-amber-500 rounded-full" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></span>
              En desarrollo
            </span>
          }
          @case ('live') {
            <span class="relative px-4 py-1.5 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-200 dark:border-emerald-700 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Disponible
            </span>
          }
        }
      </div>

      <div class="p-6 flex flex-col flex-1">
        <h3 class="text-base font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {{ project().title }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed flex-1">
          {{ project().description }}
        </p>

        <!-- Tech stack -->
        <div class="flex flex-wrap gap-2 mb-5">
          @for (tech of project().techStack; track tech) {
            <span class="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg">
              {{ tech }}
            </span>
          }
        </div>

        <!-- Links -->
        @if (project().githubUrl || project().liveUrl) {
          <div class="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            @if (project().githubUrl) {
              <a [href]="project().githubUrl"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Código
              </a>
            }
            @if (project().liveUrl) {
              <a [href]="project().liveUrl"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Demo
              </a>
            }
          </div>
        }
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
