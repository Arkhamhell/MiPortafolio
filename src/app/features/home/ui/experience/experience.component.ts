import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { EXPERIENCE, type ExperienceEntry } from '../../../../shared/constants/portfolio.constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitleComponent],
  template: `
    <section id="experience" class="py-28 bg-bg-base">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          number="04"
          filename="experiencia.log"
          title="Dónde he dejado huella."
        />

        <div class="relative max-w-2xl">
          <!-- Línea vertical del timeline -->
          <div class="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true"></div>

          <div class="space-y-10">
            @for (entry of experience; track entry.id) {
              <div class="relative pl-14">
                <!-- Nodo del timeline -->
                <div
                  class="absolute left-0 w-9 h-9 rounded-full border-2 border-accent flex items-center justify-center"
                  [class.bg-accent]="entry.isCurrent"
                  [class.bg-bg-base]="!entry.isCurrent"
                  aria-hidden="true"
                >
                  @if (entry.isCurrent) {
                    <span class="w-2 h-2 rounded-full bg-bg-base"></span>
                  } @else {
                    <span class="w-2 h-2 rounded-full bg-accent/50"></span>
                  }
                </div>

                <!-- Contenido -->
                <div class="bg-surface border border-border rounded-xl p-6">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 class="text-base font-bold text-text-heading">{{ entry.role }}</h3>
                      <p class="text-accent text-sm font-mono">{{ entry.company }}</p>
                    </div>
                    <span class="font-mono text-xs text-accent shrink-0">{{ entry.period }}</span>
                  </div>

                  <p class="text-text-body text-sm leading-relaxed mb-4">{{ entry.description }}</p>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2">
                    @for (tag of entry.tags; track tag) {
                      <span class="font-mono text-xs px-2 py-1 border border-border text-text-muted rounded">
                        {{ tag }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly experience: ExperienceEntry[] = EXPERIENCE;
}
