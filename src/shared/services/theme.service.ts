import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'matrix';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * 'dark' é o tema padrão (mesmo do script em index.html); usar o mesmo
   * valor no SSR faz o HTML pré-renderizado já vir com a foto correta.
   */
  currentTheme = signal<ThemeMode>('dark');
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('user-portfolio-theme') as ThemeMode;
      if (savedTheme) {
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
