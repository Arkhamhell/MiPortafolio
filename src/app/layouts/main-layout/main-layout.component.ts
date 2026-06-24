import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `
    <!-- Navbar -->
    <header class="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border transition-colors duration-300">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Navegación principal">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5" aria-label="Manuel Gatica - Inicio">
          <span class="font-mono text-sm px-1.5 py-0.5 border border-accent text-accent rounded leading-none">
            &lt;/&gt;
          </span>
          <span class="font-mono text-sm font-semibold text-text-heading tracking-tight">
            Manuel Gatica
          </span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          @for (link of navLinks; track link.label) {
            <a [href]="link.href"
               class="px-3 py-2 font-mono text-xs text-text-muted hover:text-text-heading transition-colors duration-200">
              {{ link.label }}
            </a>
          }
        </div>

        <!-- Right actions -->
        <div class="flex items-center gap-3">
          <a href="#contact"
             class="hidden md:inline-flex items-center px-4 py-2 font-mono text-xs border border-accent text-accent hover:bg-accent hover:text-bg-base transition-all duration-200 rounded">
            Hablemos
          </a>
          <!-- Mobile menu button -->
          <button
            (click)="toggleMenu()"
            class="md:hidden p-2 rounded border border-border text-text-muted hover:border-border-hover hover:text-text-heading transition-colors"
            [attr.aria-expanded]="isMenuOpen()"
            aria-label="Abrir menú"
          >
            @if (isMenuOpen()) {
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            } @else {
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            }
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      @if (isMenuOpen()) {
        <div class="md:hidden border-t border-border bg-surface px-4 py-3 flex flex-col gap-1">
          @for (link of navLinks; track link.label) {
            <a [href]="link.href"
               (click)="closeMenu()"
               class="px-4 py-3 font-mono text-xs text-text-muted hover:text-text-heading hover:bg-surface-2 rounded transition-colors">
              {{ link.label }}
            </a>
          }
          <a href="#contact"
             (click)="closeMenu()"
             class="mt-2 px-4 py-3 font-mono text-xs border border-accent text-accent rounded text-center hover:bg-accent hover:text-bg-base transition-all duration-200">
            Hablemos
          </a>
        </div>
      }
    </header>

    <!-- Page content -->
    <main class="pt-16">
      <router-outlet />
    </main>

    <!-- Footer -->
    <footer class="border-t border-border bg-surface">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-mono text-xs text-text-muted">
          © 2026 Manuel Gatica. Todos los derechos reservados.
        </p>
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
        </div>
      </div>
    </footer>
  `,
})
export class MainLayoutComponent {
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
