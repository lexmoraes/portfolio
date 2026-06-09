import { Component, ElementRef, ViewChild, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ResumeView } from '../../shared/resume-view/resume-view';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  imports: [ResumeView, MatIcon],
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  private platformId = inject(PLATFORM_ID);

  // 🌟 Signal para controlar o estado do clique e da animação
  isDownloading = signal<boolean>(false);

  @ViewChild('resumeTemplate', { read: ElementRef, static: false }) resumeElement!: ElementRef;

  async downloadPDF() {
    // 🛡️ Proteção extra: Se já estiver baixando, ignora novos cliques
    if (this.isDownloading()) return;

    if (isPlatformBrowser(this.platformId)) {
      this.isDownloading.set(true); // Ativa o estado de carregamento

      try {
        const html2pdf = (await import('html2pdf.js')).default;
        const elementos = this.resumeElement.nativeElement;

        const conf = {
          margin: 10,
          filename: 'cv-alexsandro-moraes.pdf',
          image: { type: 'jpeg' as const, quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
        };

        // 🌟 O 'await' faz o código esperar o pdf ser gerado e entregue ao navegador
        await html2pdf().set(conf).from(elementos).save();

      } catch (error) {
        console.error('Erro ao gerar o currículo:', error);
      } finally {
        this.isDownloading.set(false); // 🌟 Libera o botão automaticamente quando o download inicia
      }
    }
  }
}
