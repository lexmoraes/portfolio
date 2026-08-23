import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark';

const VALID_THEMES: ThemeMode[] = ['light', 'dark'];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal<ThemeMode>('light');
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('user-portfolio-theme') as ThemeMode | null;
      // 🧹 Protege contra valores antigos no localStorage (ex: 'matrix', removido)
      if (savedTheme && VALID_THEMES.includes(savedTheme)) {
        this.setTheme(savedTheme);
      } else {
        this.setTheme('dark');
      }
    }
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user-portfolio-theme', theme);
      const root = document.documentElement;
      root.classList.remove('light', 'dark', 'matrix');
      root.classList.add(theme);
    }
  }
}
