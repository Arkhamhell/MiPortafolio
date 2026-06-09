import { PLATFORM_ID, Injectable, inject, signal, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly isDark = signal(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(saved ? saved === 'dark' : prefersDark);
    }

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.classList.toggle('dark', this.isDark());
        localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
      }
    });
  }

  toggle(): void {
    this.isDark.update(v => !v);
  }
}
