import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';
import { SKILL_GROUPS, type SkillGroup } from '../../../../shared/constants/portfolio.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitleComponent],
  template: `
    <section id="skills" class="py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          title="Habilidades"
          subtitle="Tecnologías con las que trabajo día a día"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (group of skillGroups; track group.category) {
            <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors duration-300">
              <!-- Category header -->
              <div class="flex items-center gap-3 mb-6">
                <span class="text-2xl" aria-hidden="true">{{ group.icon }}</span>
                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {{ group.category }}
                </h3>
              </div>

              <!-- Skills badges -->
              <div class="flex flex-wrap gap-2.5">
                @for (skill of group.skills; track skill.name) {
                  <span class="px-3 py-1.5 text-sm font-medium rounded-lg {{ group.badgeClass }}">
                    {{ skill.name }}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  protected readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
