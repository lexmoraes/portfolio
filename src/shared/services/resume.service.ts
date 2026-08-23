import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  async downloadAsPdf(element: HTMLElement, filename = 'cv-alexsandro-moraes.pdf'): Promise<void> {
    const html2pdf = (await import('html2pdf.js')).default;

    const conf = {
      margin: 10,
      filename,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
    };

    await html2pdf().set(conf).from(element).save();
  }
}
