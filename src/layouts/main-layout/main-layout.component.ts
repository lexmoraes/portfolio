import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { ThemeService } from '../../shared/services/theme.service';
import { MatrixRainComponent } from '../../shared/matrix-rain/matrix-rain.component';

type ThemeMode = 'light' | 'dark' | 'matrix';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, MatIcon, MatMenu, MatMenuTrigger, MatrixRainComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  themeService = inject(ThemeService);
}
