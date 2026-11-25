import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

interface ContactLink {
  label: string;
  detail: string;
  href: string;
  external: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ResumeComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly links: ContactLink[] = [
    {
      label: 'WhatsApp',
      detail: 'Mensagem direta',
      href: 'https://wa.me/5592984922162?text=Ol%C3%A1%2C%20Alexsandro!%20Acessei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
      external: true
    },
    {
      label: 'E-mail',
      detail: 'lexfisica@gmail.com',
      href: 'mailto:lexfisica@gmail.com?subject=Oportunidade%20-%20Portf%C3%B3lio',
      external: false
    },
    {
      label: 'LinkedIn',
      detail: 'in/lexmoraes',
      href: 'https://www.linkedin.com/in/lexmoraes',
      external: true
    },
    {
      label: 'GitHub',
      detail: 'github.com/lexmoraes',
      href: 'https://github.com/lexmoraes',
      external: true
    }
  ];
}
