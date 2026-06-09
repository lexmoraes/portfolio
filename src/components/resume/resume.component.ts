import { Component, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
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

  @ViewChild('resumeTemplate', { read: ElementRef, static: false }) resumeElement!: ElementRef;

  async downloadPDF() {
    if (isPlatformBrowser(this.platformId)) {
      const html2pdf = (await import('html2pdf.js')).default;

      const elementos = this.resumeElement.nativeElement;
      const conf = {
        margin: 10,
        filename: 'cv-alexsandro-moraes.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
      };

      html2pdf().set(conf).from(elementos).save();
    }
  }
}
