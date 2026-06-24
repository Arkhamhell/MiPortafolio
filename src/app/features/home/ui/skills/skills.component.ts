import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { SKILL_GROUPS, type SkillGroup } from '../../../../shared/constants/portfolio.constants';

@Component({
  selector: 'app-stack',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitleComponent],
  template: `
    <section id="stack" class="py-28 bg-bg-subtle">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          number="02"
          filename="stack.json"
          title="Herramientas con las que construyo."
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          @for (group of skillGroups; track group.category) {
            <div class="bg-surface rounded-xl p-6 border border-border hover:border-accent/30 transition-colors duration-300">
              <!-- Cabecera tarjeta -->
              <div class="mb-5">
                <p class="font-mono text-xs text-accent mb-1">[ {{ group.label }} ]</p>
                <h3 class="text-lg font-bold text-text-heading">{{ group.category }}</h3>
              </div>

              <!-- Tags monospace -->
              <div class="flex flex-wrap gap-2">
                @for (skill of group.skills; track skill.name) {
                  <span class="font-mono text-xs px-2.5 py-1 border border-border text-text-muted rounded hover:border-accent hover:text-accent transition-colors duration-200 cursor-default">
                    {{ skill.name }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  protected readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
