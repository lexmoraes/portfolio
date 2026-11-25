import { Component, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../../../core/models/project';

interface ProjectLink {
  label: string;
  ariaLabel: string;
  href: string;
}

/** Quantidade de tecnologias exibidas antes do botão "+N". */
const VISIBLE_TECHS = 6;

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './project-card.component.html',
  host: { class: 'block h-full' }
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();

  readonly showAllTechs = signal(false);

  readonly visibleTechs = computed(() => {
    const techs = this.project().technologies;
    return this.showAllTechs() ? techs : techs.slice(0, VISIBLE_TECHS);
  });

  readonly hiddenTechsCount = computed(() =>
    Math.max(0, this.project().technologies.length - VISIBLE_TECHS)
  );

  readonly links = computed<ProjectLink[]>(() => {
    const p = this.project();
    const links: ProjectLink[] = [];
    if (p.deployUrl) links.push({ label: 'Ver online', ariaLabel: `Ver ${p.title} online`, href: p.deployUrl });
    if (p.scientificArticle) links.push({ label: 'Artigo científico', ariaLabel: `Ler o artigo científico sobre ${p.title}`, href: p.scientificArticle });
    if (p.gitFrontendUrl) links.push({ label: 'Código frontend', ariaLabel: `Código do frontend de ${p.title} no GitHub`, href: p.gitFrontendUrl });
    if (p.gitBackendUrl) links.push({ label: 'Código backend', ariaLabel: `Código do backend de ${p.title} no GitHub`, href: p.gitBackendUrl });
    return links;
  });

  toggleTechs(): void {
    this.showAllTechs.update(v => !v);
  }
}
