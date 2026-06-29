import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ai-focus',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 bg-surface border-y border-border">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Cabecera -->
        <div class="flex items-start gap-4 mb-10">
          <div class="w-1 self-stretch bg-accent rounded-full shrink-0" aria-hidden="true"></div>
          <div>
            <p class="font-mono text-xs text-accent mb-2">[ ia.config ]</p>
            <h2 class="text-3xl md:text-4xl font-black text-text-heading leading-tight mb-3">
              Construyendo con IA,<br>no solo aprendiéndola.
            </h2>
            <p class="text-text-body max-w-xl leading-relaxed">
              Actualmente en diplomado de IA aplicada. Integro Claude y Gemini en proyectos reales.
            </p>
          </div>
        </div>

        <!-- 3 cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

          <!-- Card 1 — Formación -->
          <div class="bg-surface-2 border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300">
            <p class="font-mono text-xs text-accent mb-3">[ formación ]</p>
            <h3 class="text-base font-bold text-text-heading mb-3">Diplomado en IA</h3>
            <p class="text-sm text-text-body leading-relaxed mb-5">
              Modelos de lenguaje, prompt engineering, RAG y aplicaciones prácticas de IA generativa.
            </p>
            <div>
              <div class="flex justify-between items-center mb-1.5">
                <span class="font-mono text-xs text-text-muted">en curso</span>
                <span class="font-mono text-xs text-warn">ago 2025</span>
              </div>
              <div class="h-1 bg-surface rounded-full overflow-hidden">
                <div class="h-full bg-warn rounded-full" style="width: 75%"></div>
              </div>
            </div>
          </div>

          <!-- Card 2 — Herramientas -->
          <div class="bg-surface-2 border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300">
            <p class="font-mono text-xs text-accent mb-3">[ stack IA ]</p>
            <h3 class="text-base font-bold text-text-heading mb-3">Herramientas activas</h3>
            <p class="text-sm text-text-body leading-relaxed mb-5">
              Usando en proyectos reales, tanto en el trabajo como en desarrollo personal.
            </p>
            <div class="flex flex-wrap gap-2">
              @for (tool of aiTools; track tool) {
                <span class="font-mono text-xs px-2.5 py-1 border border-border text-text-muted rounded hover:border-accent hover:text-accent transition-colors duration-200">
                  {{ tool }}
                </span>
              }
            </div>
          </div>

          <!-- Card 3 — Aplicando -->
          <div class="bg-surface-2 border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300">
            <p class="font-mono text-xs text-accent mb-3">[ aplicando ]</p>
            <h3 class="text-base font-bold text-text-heading mb-3">En proyectos reales</h3>
            <p class="text-sm text-text-body leading-relaxed">
              Integro LLMs en flujos de desarrollo: generación de código, revisiones técnicas,
              automatización de tareas repetitivas y asistentes contextuales propios.
            </p>
          </div>

        </div>
      </div>
    </section>
  `,
})
export class AiFocusComponent {
  protected readonly aiTools = [
    'Claude Code',
    'Gemini',
    'Prompt Engineering',
    'LLM APIs',
    'RAG',
  ];
}
