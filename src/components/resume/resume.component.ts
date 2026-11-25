import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

/** Caminho do PDF gerado por `npm run cv:pdf` (servido a partir de /public). */
export const CV_PDF_PATH = 'cv-alexsandro-moraes.pdf';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  imports: [MatIcon],
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  readonly pdfPath = CV_PDF_PATH;
  readonly label = input('Baixar CV');
}
