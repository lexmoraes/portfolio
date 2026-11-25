import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ThemeService } from '../../shared/services/theme.service';
import { MatrixRainComponent } from '../../shared/matrix-rain/matrix-rain.component';

interface NavItem {
  id: string;
  label: string;
  /** No celular o logo já leva ao início; esconder o item libera espaço. */
  hideOnMobile?: boolean;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, RouterLink, MatIcon, MatMenu, MatMenuTrigger, MatMenuItem, MatrixRainComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly navItems: NavItem[] = [
    { id: 'hero', label: 'Início', hideOnMobile: true },
    { id: 'projects', label: 'Projetos' },
    { id: 'about', label: 'Sobre' },
    { id: 'contato', label: 'Contato' }
  ];

  /** Seção visível no momento, destacada no menu (aria-current). */
  readonly activeSection = signal<string | null>(null);

  constructor() {
    afterNextRender(() => {
      let observer: IntersectionObserver | null = null;

      const observeSections = () => {
        observer?.disconnect();
        this.activeSection.set(null);

        // A faixa central da viewport define qual seção está "ativa"
        observer = new IntersectionObserver(
          entries => {
            for (const entry of entries) {
              if (entry.isIntersecting) this.activeSection.set(entry.target.id);
            }
          },
          { rootMargin: '-45% 0px -50% 0px' }
        );

        for (const item of this.navItems) {
          const el = document.getElementById(item.id);
          if (el) observer.observe(el);
        }
      };

      observeSections();
      const sub = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) setTimeout(observeSections);
      });

      this.destroyRef.onDestroy(() => {
        observer?.disconnect();
        sub.unsubscribe();
      });
    });
  }
}
