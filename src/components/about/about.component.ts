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
      year: 'Abril/2025 - Junho/2026',
      title: 'Desenvolvedor Full Stack Estagiário',
      institution: 'Fundação Desembargador Paulo Feitoza',
      description:
        'Atuação em projetos corporativos utilizando Angular, Django REST Framework, PostgreSQL, WebSocket, Celery + Redis e integração com APIs externas. Desenvolvimento de soluções voltadas para gestão ágil, processos financeiros internos e aplicações escaláveis.'
    },
    {
      year: 'Maio/2026',
      title: 'Publicação Científica na UFSM',
      institution: 'Universidade Federal de Santa Maria (UFSM)',
      description:
        'Coautor do artigo científico “Astrobit: Um Espaço de Aprendizado”, envolvendo tecnologia aplicada à educação, gamificação e desenvolvimento de software educacional.'
    },
    {
      year: 'Junho/2024 - Junho/2025',
      title: 'Premiação de projetos no ensino técnico',
      institution: 'FPFtech Educacional',
      description:
        'Participação no desenvolvimento de platforms premiados com medalhas de ouro na feira tecnológica Mostratech como Bit Debugger, Astrobit e Bit Academy, utilizando Angular, Django REST Framework, PostgreSQL, Docker e arquitetura modular.'
    },
    {
      year: 'Agosto/2024 - Junho/2026',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Cruzeiro do Sul Virtual',
      description:
        'Formação voltada para engenharia de software, desenvolvimento web, APIs REST, bancos de dados, arquitetura de sistemas e metodologias ágeis.'
    },
    {
      year: 'Janeiro/2024 - Junho/2025',
      title: 'Técnico em Informática para Web',
      institution: 'FPFtech Educacional',
      description:
        'Formação técnica com foco em desenvolvimento web moderno, programação orientada a objetos, frontend com Angular e backend utilizando Django REST Framework.'
    },
    {
      year: 'Maio/2023 - Dezembro/2024',
      title: 'Apontador de Produção',
      institution: 'Digitron da Amazônia',
      description:
        'Atuação na área industrial com foco em controle logístico, gestão de processos e garantia da qualidade. Responsável pela gestão de materiais utilizando SAP, acompanhamento de ordens de produção, análise de movimentação de estoque e identificação de falhas em equipamentos eletrônicos, desenvolvendo forte capacidade analítica e resolução de problemas.'
    },
    {
      year: 'Outubro/2022 - Maio/2023',
      title: 'Testador de Controle de Qualidade',
      institution: 'Digitron da Amazônia',
      description:
        'Realização de testes em equipamentos eletrônicos e placas, identificando defeitos, validando funcionamento e contribuindo para a melhoria contínua da qualidade dos produtos. Experiência prática em análise técnica, diagnóstico de falhas e processos industriais.'
    },
    {
      year: 'Março/2017 - Março/2021 (trancado)',
      title: 'Licenciatura em Física, Pesquisa e Extensão',
      institution: 'Universidade Federal do Amazonas (UFAM)',
      description:
        'Formação em Física com atuação como bolsista de iniciação científica e professor voluntário do Projeto Cosmos, desenvolvendo atividades de pesquisa, ensino e divulgação científica.'
    },
    {
      year: 'Fevereiro/2016',
      title: 'Premiação em Tecnologia Assistiva',
      institution: 'FEBRACE / USP',
      description:
        'Recebeu o Prêmio Contribuição em Tecnologia Assistiva CNRTA-CTI Renato Archer durante a Feira Brasileira de Ciências e Engenharia (FEBRACE), com projeto envolvendo robótica e programação.'
    },
    {
      year: 'Maio/2014 - Maio/2016',
      title: 'Jovem Aprendiz Bancário',
      institution: 'Banco da Amazônia',
      description:
        'Primeira experiência profissional, atuando em rotinas administrativas e atendimento. Durante esse período conciliou trabalho, estudos e desenvolvimento de projetos de robótica e programação que resultaram em premiações na FEBRACE e participação 32 na MOSTRATEC.'
    },
  ]);
}
