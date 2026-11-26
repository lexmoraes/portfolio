import { Project } from '../models/project';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '9',
    title: 'Qualifica',
    subtitle: 'Sistema de Gestão da Qualidade ISO 9001 · 14001',
    description:
      'Reestruturação completa do sistema de gestão da qualidade da ANOREG-AM, de React + Supabase para Django + Angular, com migração dos dados. Módulos de fornecedores, RH, treinamentos, manutenção/TI e procedimentos, com notificações em tempo real. Inclui login em duas etapas (TOTP), adequação à LGPD, trilha de auditoria, CI com testes E2E e varredura de vulnerabilidades, deploy com rollback automático, backup criptografado e monitoramento com Sentry e Prometheus.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'Django Channels',
      'PostgreSQL',
      'Celery',
      'Redis',
      'SeaweedFS (S3)',
      'Docker',
      'Caddy',
      'GitHub Actions',
      'Playwright',
      'Prometheus'
    ],
    corporate: true,
    company: 'ANOREG-AM'
  },

  {
    id: '10',
    title: 'Portal do Selo',
    subtitle: 'Selo Digital dos Cartórios do Amazonas',
    description:
      'Contribuição em sistema legado de microsserviços que controla o selo digital dos atos dos cartórios. Filtros, tabelas e relatórios Excel nas listagens de cartórios e usuários, controle de acesso por cartório com escopo calculado no servidor, correção de OutOfMemory no serviço de relatórios e homologação do serviço de IA (RAG) que apoia as correições.',
    technologies: [
      'Java',
      'Spring Boot',
      'AngularJS',
      'PostgreSQL',
      'Liquibase',
      'Keycloak',
      'Docker',
      'RAG'
    ],
    corporate: true,
    company: 'ANOREG-AM'
  },

  {
    id: '1',
    title: 'Planit',
    subtitle: 'Plataforma Corporativa de Gestão Ágil',
    description:
      'Sistema corporativo desenvolvido na FPFtech voltado para gestão ágil de equipes, projetos e fluxos de trabalho. Atuação no frontend com Angular e backend utilizando Django REST Framework, integração com API do GitLab, autenticação OAuth, WebSocket e mensageria com Celery + Redis.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'PostgreSQL',
      'Redis',
      'Celery',
      'WebSocket',
      'OAuth',
      'GitLab API'
    ],
    deployUrl: 'https://planit.fpf.br',
    imageUrl: 'assets/images/projects/planit.webp',
    corporate: true,
    company: 'FPFtech'
  },

  {
    id: '8',
    title: 'Skeleton',
    subtitle: 'Base Full Stack para Novos Projetos',
    description:
      'Base full stack reutilizável para iniciar novos sistemas sem reescrever a infraestrutura. Traz autenticação JWT com rotação e blacklist de refresh token, WebSocket autenticado com Django Channels, mensageria com Celery + Redis, storage S3 com SeaweedFS, i18n em português e inglês, CI no GitHub Actions e deploy com Docker atrás de Nginx.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'Django Channels',
      'PostgreSQL',
      'Celery',
      'Redis',
      'JWT',
      'Docker',
      'Nginx',
      'SeaweedFS (S3)',
      'Transloco (i18n)',
      'GitHub Actions'
    ],
    repositoryUrl: 'https://github.com/lexmoraes/skeleton',
    imageUrl: 'assets/images/projects/skeleton.webp',
    corporate: false
  },

  {
    id: '2',
    title: 'Bit Academy',
    subtitle: 'Ecossistema Inteligente de Gestão Escolar',
    description:
      'Projeto modular desenvolvido para modernizar a gestão escolar e potencializar o aprendizado com recursos inteligentes e gamificação. Desenvolvimento frontend em Angular e backend em Django REST Framework com arquitetura modular e deploy utilizando Docker.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'PostgreSQL',
      'Docker',
      'REST API'
    ],
    gitFrontendUrl: 'https://github.com/antonio-pss/bit-academy-frontend',
    gitBackendUrl: 'https://github.com/antonio-pss/bit-academy-back',
    imageUrl: 'assets/images/projects/bit-academy.webp',
    corporate: false
  },

  {
    id: '3',
    title: 'Bit Debugger',
    subtitle: 'Jogo Educacional Gamificado',
    description:
      'Jogo educacional desenvolvido em equipe com foco no ensino de lógica e programação. Projeto premiado com o 1º lugar na X Mostratech da FPFtech, utilizando Python, PostgreSQL e ferramentas de game design para criar uma experiência interativa e educativa.',
    technologies: [
      'Python',
      'PostgreSQL',
      'Pygame',
      'Game Development',
      'Aseprite',
      'Tiled'
    ],
    imageUrl: 'assets/images/projects/bit-debugger.webp',
    corporate: false
  },

  {
    id: '4',
    title: 'Astrobit',
    subtitle: 'Plataforma Gamificada de Aprendizado',
    description:
      'Projeto educacional gamificado, 1º lugar na XV Mostratech da FPFtech e publicado em artigo científico pela Universidade Federal de Santa Maria (UFSM). Atuação no backend e na modelagem do banco de dados. Desenvolvimento frontend com Angular, backend em Django REST Framework e jogos desenvolvidos na Godot Engine.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'Godot',
      'PostgreSQL',
      'Docker'
    ],
    gitBackendUrl: 'https://github.com/lexmoraes/astrobit-backend',
    gitFrontendUrl: 'https://github.com/alef-nunesmonteiro/astrobit-front',
    deployUrl: 'https://antonio-pss.github.io/astrobit/',
    imageUrl: 'assets/images/projects/astrobit.webp',
    scientificArticle: 'https://periodicos.ufsm.br/reter/article/view/94680',
    corporate: false
  },

  {
    id: '5',
    title: 'Meu Portfólio',
    subtitle: 'Portfólio Profissional Full Stack',
    description:
      'Portfólio moderno desenvolvido em Angular com foco em performance, responsividade e experiência visual. Utiliza Angular Signals, componentes standalone, renderização no servidor (SSR) e três temas visuais para apresentar projetos e trajetória profissional.',
    technologies: [
      'Angular',
      'TypeScript',
      'Angular SSR',
      'TailwindCSS',
      'Angular Signals',
      'Responsive Design'
    ],
    gitFrontendUrl: 'https://github.com/lexmoraes/portfolio',
    deployUrl: 'https://www.alexmoraes.dev',
    imageUrl: 'assets/images/projects/portfolio.webp',
    corporate: false
  },

  {
    id: '6',
    title: 'Bit',
    subtitle: 'Sistema ERP de Gestão Corporativa Integrada',
    description:
      'Solução ERP corporativa modular voltada para centralização de processos e automação de fluxos com o uso de Inteligência Artificial. Conta com módulos específicos para Gestão de Talentos (RH), controle operacional/financeiro e agentes de IA integrados com OpenAI para análise inteligente de documentos.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'PostgreSQL',
      'Redis',
      'Celery',
      'WebSocket',
      'OpenAI (IA)',
      'MinIO',
      'Docker'
    ],
    deployUrl: 'https://bit.fpf.br/',
    imageUrl: 'assets/images/projects/bit.webp',
    corporate: true,
    company: 'FPFtech'
  },

  {
    id: '7',
    title: 'Nexus',
    subtitle: 'Plataforma ERP de Planejamento Governamental',
    description:
      'Plataforma front-end e back-end moderna voltada para gestão empresarial, controle financeiro corporativo e auditorias. A arquitetura implementa comunicação assíncrona em tempo real e suporte robusto multi-banco para grandes volumes de requisições de compra e prestação de contas.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'PostgreSQL',
      'SQL Server',
      'Redis',
      'Celery',
      'WebSocket',
      'Amazon S3',
      'Docker'
    ],
    corporate: true,
    company: 'FPFtech'
  }
];
