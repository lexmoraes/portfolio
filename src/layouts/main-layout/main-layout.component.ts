import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // 💡 Necessário para proteger o SSR
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { ThemeService } from '../../shared/services/theme.service';

type ThemeMode = 'light' | 'dark' | 'matrix';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, MatIcon, MatMenu, MatMenuTrigger],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  themeService = inject(ThemeService);
  currentTheme = signal<ThemeMode>('light');
  private platformId = inject(PLATFORM_ID);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('user-portfolio-theme') as ThemeMode;
      if (savedTheme) {
        this.changeTheme(savedTheme);
      }
    }
  }

  changeTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user-portfolio-theme', theme);

      const root = document.documentElement;

      root.classList.remove('light', 'dark', 'matrix');

      root.classList.add(theme);
    }
  }
}
