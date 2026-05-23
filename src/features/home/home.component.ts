import { Component, signal, afterNextRender} from '@angular/core';
import { Project } from '../../core/models/project';
import { MOCK_PROJECTS } from '../../core/mocks/projects-mocks';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {CommonModule} from '@angular/common';

declare const AOS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { // 👈 2. Removemos o "implements AfterViewInit"
  projects = signal<Project[]>(MOCK_PROJECTS);
  developerName = signal<string>('Alexsandro Moraes');

  constructor() {
    afterNextRender(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out'
        });
        AOS.refresh();
      }
    });
  }
}
