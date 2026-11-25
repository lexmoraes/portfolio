import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'matrix';

const STORAGE_KEY = 'user-portfolio-theme';
const THEMES: readonly ThemeMode[] = ['light', 'dark', 'matrix'];

const isThemeMode = (value: unknown): value is ThemeMode =>
  THEMES.includes(value as ThemeMode);

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);

  /**
   * 'dark' é o tema padrão (mesmo do script em index.html); usar o mesmo
   * valor no SSR faz o HTML pré-renderizado já vir com a foto correta.
   */
  readonly currentTheme = signal<ThemeMode>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.setTheme(this.readStoredTheme() ?? 'dark');
    }
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);

    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // Armazenamento indisponível (modo privado, cookies bloqueados): segue sem persistir
      }
      const root = document.documentElement;
      root.classList.remove(...THEMES);
      root.classList.add(theme);
    }
  }

  private readStoredTheme(): ThemeMode | null {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return isThemeMode(saved) ? saved : null;
    } catch {
      return null;
    }
  }
}
