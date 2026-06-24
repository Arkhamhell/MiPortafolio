import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-14">
      @if (number() || filename()) {
        <p class="font-mono text-xs text-accent mb-3 tracking-wider">
          {{ number() }}{{ number() && filename() ? ' — ' : '' }}{{ filename() }}
        </p>
      }
      <h2 class="text-3xl md:text-4xl font-black text-text-heading leading-tight mb-3">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="text-text-body text-lg max-w-xl">
          {{ subtitle() }}
        </p>
      }
      <div class="mt-5 w-12 h-px bg-accent"></div>
    </div>
  `,
})
export class SectionTitleComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly number = input<string>('');
  readonly filename = input<string>('');
}
