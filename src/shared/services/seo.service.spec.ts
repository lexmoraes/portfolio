import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/core';
import { SeoService, SITE_URL } from './seo.service';

describe('SeoService', () => {
  it('updates title, description, og:url and canonical', () => {
    const service = TestBed.inject(SeoService);
    const doc = TestBed.inject(DOCUMENT);

    service.update({ title: 'Página', description: 'Descrição', path: '/curriculo' });

    expect(doc.title).toBe('Página');
    expect(doc.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Descrição');
    expect(doc.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(`${SITE_URL}/curriculo`);
    expect(doc.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe(`${SITE_URL}/curriculo`);
  });
});
