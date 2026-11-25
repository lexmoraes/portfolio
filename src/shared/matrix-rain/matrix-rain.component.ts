import { Component, ElementRef, OnDestroy, afterNextRender, viewChild } from '@angular/core';

/**
 * Efeito "chuva de código" do tema Matrix.
 * Fica atrás do conteúdo (z-index 0), respeita prefers-reduced-motion
 * e pausa quando a aba não está visível.
 */
@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  templateUrl: './matrix-rain.component.html',
  styles: [`
    .matrix-canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0.35;
      pointer-events: none;
    }
  `]
})
export class MatrixRainComponent implements OnDestroy {
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrame = 0;
  private drops: number[] = [];
  private readonly chars = '01アイウエオ';
  private readonly fontSize = 12;
  private frameCount = 0;
  private reducedMotion = false;
  private readonly cleanups: Array<() => void> = [];

  constructor() {
    afterNextRender(() => this.init());
  }

  private init(): void {
    const canvas = this.canvasRef().nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: true });
    if (!this.ctx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotion = motionQuery.matches;

    const onResize = () => this.resizeCanvas();
    const onVisibility = () => (document.hidden ? this.stop() : this.start());
    const onMotionChange = (e: MediaQueryListEvent) => {
      this.reducedMotion = e.matches;
      this.stop();
      this.start();
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    motionQuery.addEventListener('change', onMotionChange);
    this.cleanups.push(
      () => window.removeEventListener('resize', onResize),
      () => document.removeEventListener('visibilitychange', onVisibility),
      () => motionQuery.removeEventListener('change', onMotionChange)
    );

    this.resizeCanvas();
    this.start();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef().nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / this.fontSize) + 1;
    this.drops = Array.from({ length: columns }, () =>
      this.reducedMotion ? Math.random() * (canvas.height / this.fontSize) : Math.random() * -50
    );

    if (this.reducedMotion) this.drawStaticFrame();
  }

  private start(): void {
    if (this.reducedMotion) {
      this.drawStaticFrame();
      return;
    }
    if (!this.animationFrame) this.animationFrame = requestAnimationFrame(this.animate);
  }

  private stop(): void {
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
  }

  /** Quadro único e estático para quem prefere menos movimento. */
  private drawStaticFrame(): void {
    for (let i = 0; i < 25; i++) this.drawStep();
  }

  private drawStep(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    const canvas = this.canvasRef().nativeElement;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.14)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1a981a';
    ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.chars[Math.floor(Math.random() * this.chars.length)];
      ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

      if (this.drops[i] * this.fontSize > canvas.height && Math.random() > 0.96) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }

  private animate = (): void => {
    this.frameCount++;
    // ~30fps é suficiente para o efeito e economiza CPU/bateria
    if (this.frameCount % 2 === 0) this.drawStep();
    this.animationFrame = requestAnimationFrame(this.animate);
  };

  ngOnDestroy(): void {
    this.stop();
    this.cleanups.forEach(fn => fn());
  }
}
