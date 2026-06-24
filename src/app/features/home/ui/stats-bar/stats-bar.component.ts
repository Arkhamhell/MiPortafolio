import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STATS } from '../../../../shared/constants/portfolio.constants';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-surface border-y border-border">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          @for (stat of stats; track stat.value) {
            <div class="flex flex-col items-center py-8 px-4">
              <span class="font-mono text-3xl font-bold text-accent">{{ stat.value }}</span>
              <span class="font-mono text-xs text-text-muted mt-1 text-center">{{ stat.label }}</span>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class StatsBarComponent {
  protected readonly stats = STATS;
}
