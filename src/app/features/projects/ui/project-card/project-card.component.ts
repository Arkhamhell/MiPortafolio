import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { type Project } from '../../../../shared/constants/portfolio.constants';

@Component({
  selector: 'app-project-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="group bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300 flex flex-col gap-4">

      <!-- Header: título + badge estado -->
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-base font-bold text-text-heading group-hover:text-accent transition-colors duration-200">
          {{ project().title }}
        </h3>
        @switch (project().status) {
          @case ('live') {
            <span class="font-mono text-xs text-accent flex items-center gap-1.5 shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
              live
            </span>
          }
          @case ('in-progress') {
            <span class="font-mono text-xs text-warn flex items-center gap-1.5 shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-warn shrink-0"
                    style="animation: pulse-dot 2s ease-in-out infinite;"
                    aria-hidden="true"></span>
              in-progress
            </span>
          }
          @case ('coming-soon') {
            <span class="font-mono text-xs text-text-muted shrink-0">// coming-soon</span>
          }
        }
      </div>

      <!-- Descripción -->
      <p class="text-sm text-text-body leading-relaxed flex-1">
        {{ project().description }}
      </p>

      <!-- Progress bar para in-progress -->
      @if (project().status === 'in-progress' && project().progress) {
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="font-mono text-xs text-text-muted">progreso</span>
            <span class="font-mono text-xs text-warn">{{ project().progress }}%</span>
          </div>
          <div class="h-1 bg-surface-2 rounded-full overflow-hidden">
            <div class="h-full bg-warn rounded-full transition-all duration-500"
                 [style.width.%]="project().progress"></div>
          </div>
        </div>
      }

      <!-- Tags técnicos -->
      <div class="flex flex-wrap gap-2">
        @for (tech of project().techStack; track tech) {
          <span class="font-mono text-xs px-2 py-1 border border-border text-text-muted rounded">
            {{ tech }}
          </span>
        }
      </div>

      <!-- Footer: año + links -->
      <div class="flex items-center justify-between pt-3 border-t border-border">
        <span class="font-mono text-xs text-text-muted">{{ project().year }}</span>
        <div class="flex items-center gap-3">
          @if (project().githubUrl) {
            <a [href]="project().githubUrl"
               target="_blank"
               rel="noopener noreferrer"
               class="font-mono text-xs text-text-muted hover:text-accent transition-colors duration-200">
              Código ↗
            </a>
          }
          @if (project().liveUrl) {
            <a [href]="project().liveUrl"
               target="_blank"
               rel="noopener noreferrer"
               class="font-mono text-xs text-text-muted hover:text-accent transition-colors duration-200">
              Ver sitio ↗
            </a>
          }
          @if (project().npmUrl) {
            <a [href]="project().npmUrl"
               target="_blank"
               rel="noopener noreferrer"
               class="font-mono text-xs text-text-muted hover:text-accent transition-colors duration-200">
              npm ↗
            </a>
          }
          @if (!project().githubUrl && !project().liveUrl && !project().npmUrl) {
            <span class="font-mono text-xs text-text-muted">Lista de espera</span>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
