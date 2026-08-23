import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService, ThemeMode } from '../../shared/services/theme.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  themeService = inject(ThemeService);

  onThemeChange(theme: ThemeMode): void {
    this.themeService.setTheme(theme);
  }
}
