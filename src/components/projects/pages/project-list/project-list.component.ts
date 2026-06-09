import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../../../core/models/project';
import { MOCK_PROJECTS } from '../../../../core/mocks/projects-mocks';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle],
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
  allProjects = signal<Project[]>(MOCK_PROJECTS);

  featuredProject = computed(() =>
    this.allProjects().find(p => p.title === 'Astrobit')
  );

  corporateProjects = computed(() =>
    this.allProjects().filter(p => p.corporate)
  );

  personalProjects = computed(() =>
    this.allProjects().filter(p => !p.corporate)
  );
}
