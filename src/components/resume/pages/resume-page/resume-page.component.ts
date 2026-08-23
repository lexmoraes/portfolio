import { Component, ElementRef, ViewChild, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ResumeView } from '../../../../shared/resume-view/resume-view';
import { ResumeService } from '../../../../shared/services/resume.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  templateUrl: './resume-page.component.html',
  imports: [ResumeView, MatIcon],
})
export class ResumePageComponent {
  private platformId = inject(PLATFORM_ID);
  private resumeService = inject(ResumeService);

  isDownloading = signal<boolean>(false);

  @ViewChild('resumeTemplate', { read: ElementRef, static: false }) resumeElement!: ElementRef;

  async downloadPDF() {
    if (this.isDownloading()) return;
    if (!isPlatformBrowser(this.platformId)) return;

    this.isDownloading.set(true);

    try {
      await this.resumeService.downloadAsPdf(this.resumeElement.nativeElement);
    } catch (error) {
      console.error('Erro ao gerar o currículo:', error);
    } finally {
      this.isDownloading.set(false);
    }
  }
}
