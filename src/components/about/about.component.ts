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
  templateUrl: './about.component.html',
})
export class AboutComponent {
  showContact = signal<boolean>(false);
  toggleContact(): void {
    this.showContact.update((value) => !value);
  }

  history = signal<TimelineEvent[]>([
    {
      year: 'Julho/2026 - Atual',
      title: 'Estagiário de Suporte em Tecnologia da Informação',
      institution: 'ANOREG-AM',
      description:
        'Suporte de segundo nível, atendimento de chamados, documentação técnica, automação de processos, testes de sistemas e melhoria contínua dos serviços de TI.',
    },
    {
      year: 'Abril/2025 - Junho/2026',
      title: 'Estagiário em Desenvolvemento Full Stack',
      institution: 'Fundação Desembargador Paulo Feitoza (FPFtech)',
      description:
        'Desenvolvimento de aplicações com Angular, Django REST Framework e PostgreSQL, utilizando Docker, OAuth, WebSocket, Celery + Redis e integração com APIs.',
    },
    {
      year: 'Agosto/2024 - Junho/2026',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Cruzeiro do Sul Virtual',
      description:
        'Graduação focada em engenharia de software, desenvolvimento web, bancos de dados, arquitetura de sistemas e metodologias ágeis.',
    },
    {
      year: 'Janeiro/2024 - Junho/2025',
      title: 'Técnico em Informática para Web',
      institution: 'FPFtech Educacional',
      description:
        'Formação em desenvolvimento web com Angular e Django REST Framework. Participação nos projetos Bit Debugger, Astrobit e Bit Academy, premiados na Mostratech, além da publicação científica do Astrobit na UFSM.',
    },
    {
      year: 'Maio/2023 - Dezembro/2024',
      title: 'Apontador de Produção',
      institution: 'Digitron da Amazônia',
      description:
        'Controle logístico, gestão de materiais via SAP, acompanhamento da produção e análise de qualidade de equipamentos eletrônicos.',
    },
    {
      year: 'Outubro/2022 - Maio/2023',
      title: 'Testador de Controle de Qualidade',
      institution: 'Digitron da Amazônia',
      description:
        'Testes funcionais e identificação de falhas em equipamentos eletrônicos, contribuindo para o controle da qualidade.',
    },
    {
      year: 'Março/2017 - Março/2021',
      title: 'Licenciatura em Física',
      institution: 'Universidade Federal do Amazonas (UFAM)',
      description:
        'Formação em Física com participação em pesquisa, extensão e divulgação científica como bolsista e professor voluntário.',
    },
    {
      year: 'Fevereiro/2016',
      title: 'Prêmio em Tecnologia Assistiva',
      institution: 'FEBRACE / USP',
      description:
        'Recebeu o Prêmio Contribuição em Tecnologia Assistiva CNRTA-CTI Renato Archer por projeto de robótica e programação.',
    },
    {
      year: 'Maio/2014 - Maio/2016',
      title: 'Jovem Aprendiz Bancário',
      institution: 'Banco da Amazônia',
      description:
        'Atuação em rotinas administrativas e atendimento ao público, conciliando trabalho com projetos de robótica premiados em feiras científicas.',
    },
  ]);
}
