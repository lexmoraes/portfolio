import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'matrix';

const STORAGE_KEY = 'user-portfolio-theme';
const THEMES: readonly ThemeMode[] = ['light', 'dark', 'matrix'];

/** Cor da barra do navegador no celular (<meta name="theme-color">) = --bg-page de cada tema. */
const THEME_COLORS: Record<ThemeMode, string> = {
  light: '#E0D3BA',
  dark: '#12100E',
  matrix: '#000000'
};

/** Classe que liga a transição de cores (styles.css) só após a primeira troca. */
const TRANSITIONS_CLASS = 'theme-transitions';

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
      // Sem transição: o script de index.html já pintou a página com este tema
      this.applyTheme(this.readStoredTheme() ?? 'dark');
    }
  }

  /** Troca feita pelo usuário: anima a mudança de cores. */
  setTheme(theme: ThemeMode): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.add(TRANSITIONS_CLASS);
    }
    this.applyTheme(theme);
  }

  private applyTheme(theme: ThemeMode): void {
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
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
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
