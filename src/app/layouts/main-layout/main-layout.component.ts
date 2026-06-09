import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from '../../shared/ui/theme-toggle/theme-toggle.component';
import { ThemeService } from '../../core/services/theme.service';

interface NavLink {
  label: string;
  href: string;
  isRoute: boolean;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThemeToggleComponent],
  template: `
    <!-- Navbar -->
    <header class="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Navegación principal">

        <!-- Logo -->
        <a routerLink="/" class="text-xl font-extrabold tracking-tight" aria-label="Manuel Gatica - Inicio">
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">MG</span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          @for (link of navLinks; track link.label) {
            @if (link.isRoute) {
              <a [routerLink]="link.href"
                 routerLinkActive="text-indigo-600 dark:text-indigo-400"
                 [routerLinkActiveOptions]="{ exact: true }"
                 class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                {{ link.label }}
              </a>
            } @else {
              <a [href]="link.href"
                 class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                {{ link.label }}
              </a>
            }
          }
        </div>

        <!-- Right actions -->
        <div class="flex items-center gap-2">
          <app-theme-toggle />
          <!-- Mobile menu button -->
          <button
            (click)="toggleMenu()"
            class="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
        <div class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 flex flex-col gap-1">
          @for (link of navLinks; track link.label) {
            @if (link.isRoute) {
              <a [routerLink]="link.href"
                 (click)="closeMenu()"
                 class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {{ link.label }}
              </a>
            } @else {
              <a [href]="link.href"
                 (click)="closeMenu()"
                 class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {{ link.label }}
              </a>
            }
          }
        </div>
      }
    </header>

    <!-- Page content -->
    <main class="pt-16">
      <router-outlet />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          © 2025 <span class="font-semibold text-gray-700 dark:text-gray-200">Manuel Gatica</span>. Todos los derechos reservados.
        </p>
        <p class="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
          Construido con
          <span class="font-medium text-indigo-600 dark:text-indigo-400">Angular 22</span>
          &amp;
          <span class="font-medium text-indigo-600 dark:text-indigo-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  `
})
export class MainLayoutComponent {
  protected readonly _theme = inject(ThemeService);
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'Inicio', href: '/', isRoute: true },
    { label: 'Sobre Mí', href: '/#about', isRoute: false },
    { label: 'Habilidades', href: '/#skills', isRoute: false },
    { label: 'Proyectos', href: '/projects', isRoute: true },
    { label: 'Contacto', href: '/#contact', isRoute: false }
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
