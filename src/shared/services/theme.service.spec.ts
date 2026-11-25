import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    TestBed.resetTestingModule();
  });

  it('uses dark as the default theme', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.currentTheme()).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('restores a valid saved theme', () => {
    localStorage.setItem('user-portfolio-theme', 'matrix');
    const service = TestBed.inject(ThemeService);
    expect(service.currentTheme()).toBe('matrix');
  });

  it('ignores an invalid saved theme', () => {
    localStorage.setItem('user-portfolio-theme', 'neon');
    const service = TestBed.inject(ThemeService);
    expect(service.currentTheme()).toBe('dark');
  });

  it('persists and applies a new theme, keeping a single theme class', () => {
    const service = TestBed.inject(ThemeService);
    service.setTheme('light');
    expect(localStorage.getItem('user-portfolio-theme')).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
