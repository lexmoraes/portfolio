# 🚀 Alexsandro Moraes — Developer Portfolio

Portfólio desenvolvido com Angular para apresentar minha trajetória, projetos, habilidades e conquistas como desenvolvedor de software.

## 🌐 Acesse o Portfólio

👉 **https://www.alexmoraes.dev**

## ✨ Sobre o projeto

- **Performance:** pré-renderização (SSR/SSG), imagens WebP com `NgOptimizedImage` e lazy loading
- **Responsividade:** layout pensado para celular, com áreas de toque de 44px
- **Acessibilidade:** contraste WCAG AA, navegação por teclado, `prefers-reduced-motion`
- **Três temas:** Claro, Escuro e Matrix (com chuva de código em canvas)
- **SEO:** metadados por rota, Open Graph, JSON-LD, `sitemap.xml` e `robots.txt`
- **Currículo:** página `/curriculo` em HTML e PDF com texto real (legível por ATS)

## 🛠️ Tecnologias utilizadas

- Angular 21 (standalone components, Signals, zoneless, SSR)
- TypeScript
- TailwindCSS 4
- Angular Material
- Vitest

## ▶️ Como rodar

```bash
npm ci
npm start          # servidor de desenvolvimento em http://localhost:4200
npm test           # testes unitários (Vitest)
npm run build      # build de produção com pré-renderização
npm run format     # formata o código com o Prettier
```

### Atualizar o PDF do currículo

O conteúdo do CV fica em `src/shared/resume-view/resume-view.html`. Depois de editá-lo:

```bash
npm run build
npm run serve:ssr:portfolio   # em outro terminal (http://localhost:4000)
npm run cv:pdf                # gera public/cv-alexsandro-moraes.pdf
```

O script usa o Playwright (`npx playwright install chromium`).

## 📁 Estrutura do projeto

```bash
src/
├── app/            # configuração, rotas e componente raiz
├── components/     # seções da home (hero, projetos, habilidades, sobre, contato) e currículo
├── core/           # modelos e dados dos projetos
├── layouts/        # layout principal (header, menu de temas, rodapé)
├── shared/         # serviços (tema, SEO), chuva Matrix e visualização do CV
└── styles.css      # variáveis dos temas e estilos globais
public/             # imagens, favicon, PDF do CV, sitemap e robots
scripts/            # geração do PDF do currículo
```
