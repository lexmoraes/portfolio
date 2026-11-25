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
      skills: ['Angular', 'TypeScript', 'Angular Material', 'TailwindCSS', 'Design responsivo']
    },
    {
      title: 'Backend',
      icon: 'dns',
      skills: ['Python', 'Django REST Framework', 'Django Channels', 'APIs REST', 'JWT', 'OAuth', 'WebSocket', 'NestJS', 'Prisma', 'Java', 'Go']
    },
    {
      title: 'Dados & Infraestrutura',
      icon: 'storage',
      skills: ['PostgreSQL', 'SQLite', 'Redis', 'Celery', 'Docker', 'Nginx', 'Git', 'GitHub Actions']
    },
    {
      title: 'IA & Processos',
      icon: 'psychology',
      note: 'IA, Data Science e ML em formação pelo AX Academy',
      skills: ['Inteligência Artificial', 'Data Science', 'Machine Learning', 'Automação de processos', 'Scrum', 'Kanban']
    }
  ];
}
