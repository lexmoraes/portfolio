/**
 * Gera public/cv-alexsandro-moraes.pdf a partir da página /curriculo.
 *
 * O PDF é gerado pelo motor de impressão do Chromium, então o texto é real
 * (selecionável e legível por ATS), ao contrário de um PDF feito de imagem.
 *
 * Uso:
 *   npm run build && npm run serve:ssr:portfolio   # em outro terminal
 *   npm run cv:pdf                                  # usa http://localhost:4000
 *   npm run cv:pdf -- http://localhost:4321         # URL base personalizada
 *
 * Requer Playwright instalado (npx playwright install chromium).
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const baseUrl = (process.argv[2] ?? 'http://localhost:4000').replace(/\/$/, '');
const output = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'cv-alexsandro-moraes.pdf');

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  // O CV deve sair sempre no visual claro, independente do tema salvo.
  await page.addInitScript(() => localStorage.setItem('user-portfolio-theme', 'light'));
  await page.goto(`${baseUrl}/curriculo`, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: false,
    margin: { top: '14mm', bottom: '14mm', left: '14mm', right: '14mm' }
  });
  console.log(`CV gerado em ${output}`);
} finally {
  await browser.close();
}
