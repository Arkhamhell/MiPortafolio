import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div class="absolute -top-40 -right-32 w-[500px] h-[500px] bg-indigo-500/8 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-purple-500/8 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 [background-image:linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]"></div>
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <!-- Main content -->
          <div class="flex-1 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full border border-indigo-100 dark:border-indigo-800">
              <span class="w-2 h-2 bg-emerald-500 rounded-full" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></span>
              Disponible para nuevos proyectos
            </div>

            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]">
              <span class="block text-gray-900 dark:text-white mb-1">Hola, soy</span>
              <span class="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
                Manuel Gatica
              </span>
            </h1>

            <p class="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer
            </p>

            <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Especializado en <strong class="text-gray-800 dark:text-gray-200 font-semibold">Angular</strong> y
              <strong class="text-gray-800 dark:text-gray-200 font-semibold">.NET</strong>,
              con 3 años construyendo aplicaciones modernas, escalables y de alta calidad.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a routerLink="/projects"
                 class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                Ver Proyectos
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/#contact"
                 class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5">
                Contáctame
              </a>
            </div>

            <!-- Social links -->
            <div class="flex items-center gap-3 justify-center lg:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 aria-label="GitHub"
                 class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn"
                 class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:mgatica.lira27@gmail.com"
                 aria-label="Correo electrónico"
                 class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Avatar -->
          <div class="flex-shrink-0 lg:flex-shrink">
            <div class="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
              <!-- Outer glow -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-2xl scale-110" aria-hidden="true"></div>
              <!-- Avatar circle -->
              <div class="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30 ring-4 ring-white dark:ring-gray-950">
                <span class="text-white font-black text-6xl lg:text-7xl select-none tracking-tighter">MG</span>
              </div>
              <!-- Floating badge Angular -->
              <div class="absolute -bottom-4 -left-6 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <span class="text-base" aria-hidden="true">⚡</span>
                <span class="text-sm font-bold text-gray-800 dark:text-gray-200">Angular</span>
              </div>
              <!-- Floating badge .NET -->
              <div class="absolute -top-4 -right-6 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <span class="text-base" aria-hidden="true">🔷</span>
                <span class="text-sm font-bold text-gray-800 dark:text-gray-200">.NET</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2" aria-hidden="true">
          <span class="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-600">Scroll</span>
          <div class="w-px h-10 bg-gradient-to-b from-gray-400 dark:from-gray-600 to-transparent"></div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
