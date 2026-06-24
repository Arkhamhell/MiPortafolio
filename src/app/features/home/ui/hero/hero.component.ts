import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-bg-base bg-grid-subtle">
      <!-- Blobs de fondo -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
             style="background: radial-gradient(circle, rgba(52,216,168,0.06) 0%, transparent 70%);"></div>
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
             style="background: radial-gradient(circle, rgba(52,216,168,0.04) 0%, transparent 70%);"></div>
      </div>

      <div class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">

        <!-- Badge disponibilidad -->
        <div class="inline-flex items-center gap-2.5 px-4 py-2 mb-10 border border-accent/30 rounded-full">
          <span class="w-2 h-2 rounded-full bg-accent"
                style="animation: pulse-dot 2s ease-in-out infinite;"
                aria-hidden="true"></span>
          <span class="font-mono text-xs text-accent">Disponible para proyectos</span>
        </div>

        <!-- Heading -->
        <h1 class="font-black leading-none mb-6" style="font-size: clamp(3rem, 8vw, 6rem);">
          <span class="block text-text-heading">Full Stack</span>
          <span class="block text-text-muted">
            Developer<span class="cursor-blink">_</span>
          </span>
        </h1>

        <!-- Subtítulo -->
        <p class="text-text-body text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
          Construyo sistemas desde base de datos hasta su presentación —
          y cada vez más, hasta el modelo.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
          <a href="#projects"
             class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-base font-semibold text-sm rounded transition-opacity duration-200 hover:opacity-90">
            Ver proyectos
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path d="M5 12h14M12 17l5-5-5-5"/>
            </svg>
          </a>
          <a href="#contact"
             class="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-body font-semibold text-sm rounded hover:border-border-hover hover:text-text-heading transition-colors duration-200">
            Contáctame
          </a>
          <span class="flex items-center gap-1.5 text-text-muted text-sm sm:ml-2">
            <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Santiago, CL — remoto
          </span>
        </div>

        <!-- Links sociales -->
        <div class="flex items-center gap-4">
          <a href="https://github.com/Arkhamhell" target="_blank" rel="noopener noreferrer"
             aria-label="GitHub"
             class="text-text-muted hover:text-accent transition-colors duration-200">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/manuel-gatica-lira" target="_blank" rel="noopener noreferrer"
             aria-label="LinkedIn"
             class="text-text-muted hover:text-accent transition-colors duration-200">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:mgatica.lira27@gmail.com"
             aria-label="Correo electrónico"
             class="text-text-muted hover:text-accent transition-colors duration-200">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
