import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  showContact = signal<boolean>(false);
  toggleContact(): void {
    this.showContact.update(value => !value);
  }

  history = signal<TimelineEvent[]>([
    {
      year: '2025 - Presente',
      title: 'Desenvolvedor Full Stack Estagiário',
      institution: 'Fundação Desembargador Paulo Feitoza',
      description:
        'Atuação em projetos corporativos utilizando Angular, Django REST Framework, PostgreSQL, WebSocket, Celery + Redis e integração com APIs externas. Desenvolvimento de soluções voltadas para gestão ágil, processos financeiros internos e aplicações escaláveis.'
    },
    {
      year: '2025',
      title: 'Publicação Científica na UFSM',
      institution: 'Universidade Federal de Santa Maria (UFSM)',
      description:
        'Coautor do artigo científico “Astrobit: Um Espaço de Aprendizado”, envolvendo tecnologia aplicada à educação, gamificação e desenvolvimento de software educacional.'
    },
    {
      year: '2024 - 2025',
      title: 'Premiação de projetos no ensino técnico',
      institution: 'FPFtech Educacional',
      description:
        'Participação no desenvolvimento de platforms premiados com medalhas de ouro na feira tecnológica Mostratech como Bit Debugger, Astrobit e Bit Academy, utilizando Angular, Django REST Framework, PostgreSQL, Docker e arquitetura modular.'
    },
    {
      year: '2024 - 2026',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Cruzeiro do Sul Virtual',
      description:
        'Formação voltada para engenharia de software, desenvolvimento web, APIs REST, bancos de dados, arquitetura de sistemas e metodologias ágeis.'
    },
    {
      year: '2024 - 2025',
      title: 'Técnico em Informática para Web',
      institution: 'FPFtech Educacional',
      description:
        'Formação técnica com foco em desenvolvimento web moderno, programação orientada a objetos, frontend com Angular e backend utilizando Django REST Framework.'
    },
    {
      year: '2016',
      title: 'Premiação em Tecnologia Assistiva',
      institution: 'FEBRACE / USP',
      description:
        'Recebeu o Prêmio Contribuição em Tecnologia Assistiva CNRTA-CTI Renato Archer durante a Feira Brasileira de Ciências e Engenharia (FEBRACE), com projeto envolvendo robótica e programação.'
    }
  ]);
}
