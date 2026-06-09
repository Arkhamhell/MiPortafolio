import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitleComponent],
  template: `
    <section id="about" class="py-28 bg-gray-50 dark:bg-gray-900/40 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          title="Sobre Mí"
          subtitle="Un poco sobre quién soy y lo que me apasiona"
        />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <!-- Text content -->
          <div class="space-y-5">
            <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Soy un desarrollador Full Stack de <strong class="text-gray-800 dark:text-gray-200 font-semibold">25 años</strong>
              con <strong class="text-gray-800 dark:text-gray-200 font-semibold">3 años de experiencia</strong> construyendo
              aplicaciones web modernas y de alto impacto.
            </p>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Me especializo en el ecosistema de <strong class="text-gray-800 dark:text-gray-200 font-semibold">Angular</strong> para
              el frontend y <strong class="text-gray-800 dark:text-gray-200 font-semibold">.NET / C#</strong> para el backend,
              creando soluciones escalables que siguen las mejores prácticas de la industria.
            </p>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Creo firmemente en el código limpio, la arquitectura bien pensada y la mejora continua.
              Disfruto enfrentando desafíos técnicos complejos y transformándolos en productos sólidos y mantenibles.
            </p>

            <!-- Disponibilidad / CTA inline -->
            <div class="pt-2 flex items-center gap-3">
              <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full flex-shrink-0" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
                Actualmente disponible para proyectos y oportunidades
              </span>
            </div>
          </div>

          <!-- Stats grid -->
          <div class="grid grid-cols-2 gap-4">
            @for (stat of stats; track stat.label) {
              <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors duration-200">
                <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2 tracking-tight">
                  {{ stat.value }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {{ stat.label }}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  protected readonly stats: Stat[] = [
    { value: '3+', label: 'Años de experiencia' },
    { value: '10+', label: 'Proyectos entregados' },
    { value: '2', label: 'Ecosistemas principales' },
    { value: '100%', label: 'Compromiso' }
  ];
}
