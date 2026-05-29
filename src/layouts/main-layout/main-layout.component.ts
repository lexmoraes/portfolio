import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [ MatButtonModule, RouterOutlet ],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {}
