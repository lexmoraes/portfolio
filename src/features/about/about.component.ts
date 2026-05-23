import { Component, signal } from '@angular/core';

interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'
})
export class AboutComponent {
  history = signal<TimelineEvent[]>([
    {
      year: '2024 - Presente',
      title: 'Desenvolvedor Frontend Trainee / Junior',
      institution: 'Empresa de Tecnologia ou Freelancer',
      description: 'Atuação no desenvolvimento de sistemas web responsivos utilizando Angular, ecossistema TypeScript e otimização de performance de layouts.'
    },
    {
      year: '2022 - 2025',
      title: 'Graduação em Engenharia de Software / Ciência da Computação',
      institution: 'Sua Faculdade',
      description: 'Foco em estruturas de dados, arquitetura de software, padrões de projeto e desenvolvimento de sistemas orientados a objetos.'
    }
  ]);
}
