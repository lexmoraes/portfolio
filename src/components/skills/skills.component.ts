import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface SkillGroup {
  title: string;
  icon: string;
  note?: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      title: 'Frontend',
      icon: 'web',
      skills: [
        'Angular',
        'Angular Signals',
        'Angular SSR',
        'TypeScript',
        'RxJS',
        'Angular Material',
        'TailwindCSS',
        'AngularJS',
        'Design responsivo',
        'Acessibilidade (WCAG)'
      ]
    },
    {
      title: 'Backend',
      icon: 'dns',
      skills: [
        'Python',
        'Django',
        'Django REST Framework',
        'Django Channels',
        'Celery',
        'APIs REST',
        'OpenAPI',
        'JWT',
        'OAuth',
        'WebSocket',
        'Java',
        'Spring Boot',
        'NestJS',
        'Prisma',
        'Go'
      ]
    },
    {
      title: 'Dados & Armazenamento',
      icon: 'storage',
      skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Redis', 'SeaweedFS (S3)', 'MinIO', 'Liquibase']
    },
    {
      title: 'DevOps & Segurança',
      icon: 'shield',
      skills: [
        'Docker',
        'Docker Compose',
        'Nginx',
        'Caddy',
        'Linux',
        'GitHub Actions',
        'CI/CD',
        'Trivy',
        '2FA (TOTP)',
        'LGPD',
        'AWS EC2'
      ]
    },
    {
      title: 'Qualidade & Observabilidade',
      icon: 'fact_check',
      skills: ['pytest', 'mypy', 'Ruff', 'ESLint', 'Vitest', 'Playwright', 'Sentry', 'Prometheus', 'Code review']
    },
    {
      title: 'IA & Processos',
      icon: 'psychology',
      note: 'IA, Data Science e ML em formação pelo AX Academy',
      skills: [
        'Inteligência Artificial',
        'Data Science',
        'Machine Learning',
        'RAG',
        'MCP',
        'Automação de processos',
        'Gitflow',
        'ADRs',
        'Scrum',
        'Kanban'
      ]
    }
  ];
}
