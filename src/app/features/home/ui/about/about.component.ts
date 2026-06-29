import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitleComponent],
  template: `
    <section id="about" class="py-28 bg-bg-base">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-title
          number="01"
          filename="about.me"
          title="Ingeniero de producto, no solo de código."
        />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <!-- Texto izquierda -->
          <div class="space-y-5">
            <p class="text-text-body text-lg leading-relaxed">
              Soy ingeniero full-stack con <strong class="text-text-heading font-semibold">+3 años</strong> de experiencia en diseñando y
              mantenimiento de sistemas a nivel enterprise.
            </p>
            <p class="text-text-body leading-relaxed">
              Me obsesionan los detalles que no se ven: latencia baja, tipos estrictos, despliegues óptimos y código
              que el siguiente dev agradece leer.
            </p>
            <div class="flex items-center gap-2.5 pt-2">
              <span class="w-2 h-2 rounded-full bg-accent shrink-0"
                    style="animation: pulse-dot 2s ease-in-out infinite;"
                    aria-hidden="true"></span>
              <span class="text-sm text-text-muted">Abierto a proyectos y oportunidades</span>
            </div>
          </div>

          <!-- Tarjeta terminal derecha -->
          <div class="rounded-xl border border-border bg-surface overflow-hidden">
            <!-- Barra superior -->
            <div class="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
              <span class="w-3 h-3 rounded-full bg-red-500/70" aria-hidden="true"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/70" aria-hidden="true"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/70" aria-hidden="true"></span>
              <span class="font-mono text-xs text-text-muted ml-2">whoami.sh</span>
            </div>
            <!-- Contenido terminal -->
            <div class="p-5 font-mono text-sm space-y-3">
              <p>
                <span class="text-accent">$</span>
                <span class="text-text-body ml-2">whoami</span>
              </p>
              <p class="text-text-heading pl-4">manuel_gatica</p>

              <p>
                <span class="text-accent">$</span>
                <span class="text-text-body ml-2">cat focus.txt</span>
              </p>
              <div class="pl-4 space-y-1">
                <p class="text-text-body">— Sistemas que escalan</p>
                <p class="text-text-body">— DX impecable</p>
                <p class="text-text-body">— Interfaces que se sienten rápidas</p>
              </div>

              <p>
                <span class="text-accent">$</span>
                <span class="text-text-body ml-2">status</span>
              </p>
              <p class="pl-4">
                <span class="text-accent">●</span>
                <span class="text-accent ml-2">abierto a colaborar</span>
              </p>

              <p>
                <span class="text-accent">$</span>
                <span class="text-text-body ml-2">cat learning.json</span>
              </p>
              <div class="pl-4 space-y-0.5">
                <p><span class="text-accent">"area"</span><span class="text-text-muted">: </span><span class="text-text-body">"IA aplicada"</span><span class="text-text-muted">,</span></p>
                <p><span class="text-accent">"diplomado"</span><span class="text-text-muted">: </span><span class="text-text-body">"ago 2026"</span><span class="text-text-muted">,</span></p>
                <p><span class="text-accent">"tools"</span><span class="text-text-muted">: [</span><span class="text-warn">"Claude"</span><span class="text-text-muted">, </span><span class="text-warn">"Gemini"</span><span class="text-text-muted">]</span></p>
              </div>

              <p class="text-text-muted">
                <span class="text-accent">$</span>
                <span class="cursor-blink ml-2">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
