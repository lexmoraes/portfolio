import { Project } from '../models/project';

export const MOCK_PROJECTS: Project[] = [
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
    githubUrl: 'https://planit.fpf.br',
    deployUrl: 'https://planit.fpf.br',
    imageUrl: 'assets/images/projects/planit.jpg',
    featured: true,
    aosAnimation: 'fade-up'
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
    githubUrl: 'https://github.com/antonio-pss/bit-academy-front',
    deployUrl: 'https://github.com/antonio-pss/bit-academy-back',
    imageUrl: 'assets/images/projects/bit-academy.jpg',
    featured: true,
    aosAnimation: 'fade-right'
  },

  {
    id: '3',
    title: 'Bit Debugger',
    subtitle: 'Jogo Educacional Gamificado',
    description:
      'Jogo educacional desenvolvido em equipe com foco no ensino de lógica e programação. Projeto premiado com medalha de ouro na Mostratech da FPFtech, utilizando Python, PostgreSQL e ferramentas de game design para criar uma experiência interativa e educativa.',
    technologies: [
      'Python',
      'PostgreSQL',
      'Pygame',
      'Game Development',
      'Aseprite',
      'Tiled'
    ],
    githubUrl: 'https://github.com/lexmoraes',
    imageUrl: 'assets/images/projects/bit-debugger.jpg',
    featured: false,
    aosAnimation: 'fade-left'
  },

  {
    id: '4',
    title: 'Astrobit',
    subtitle: 'Plataforma Gamificada de Aprendizado',
    description:
      'Projeto educacional gamificado publicado em artigo científico pela Universidade Federal de Santa Maria (UFSM). Desenvolvimento frontend com Angular, backend em Django REST Framework e jogos desenvolvidos na Godot Engine.',
    technologies: [
      'Angular',
      'TypeScript',
      'Django',
      'Django REST',
      'Godot',
      'PostgreSQL',
      'Docker'
    ],
    githubUrl: 'https://github.com/lexmoraes/astrobit-backend',
    deployUrl: 'https://antonio-pss.github.io/astrobit/',
    imageUrl: 'assets/images/projects/astrobit.png',
    featured: true,
    aosAnimation: 'fade-up'
  },

  {
    id: '5',
    title: 'Meu Portfólio',
    subtitle: 'Portfólio Profissional Full Stack',
    description:
      'Portfólio moderno desenvolvido em Angular com foco em performance, responsividade e experiência visual. Utiliza Angular Signals, animações com GSAP, arquitetura standalone e design minimalista para apresentar projetos e trajetória profissional.',
    technologies: [
      'Angular',
      'TypeScript',
      'GSAP',
      'TailwindCSS',
      'Angular Signals',
      'Responsive Design'
    ],
    githubUrl: 'https://github.com/lexmoraes',
    deployUrl: 'https://lexmoraes.dev',
    imageUrl: 'assets/images/projects/portfolio.png',
    featured: true,
    aosAnimation: 'fade-right'
  }
];
