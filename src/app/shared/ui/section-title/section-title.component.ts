import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center mb-14">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
          {{ subtitle() }}
        </p>
      }
      <div class="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
    </div>
  `
})
export class SectionTitleComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
