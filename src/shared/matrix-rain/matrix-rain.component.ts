import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  templateUrl: './matrix-rain.component.html',
  styles: [`
    .matrix-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      opacity: 0.45;
      pointer-events: none;
    }
  `]
})
export class MatrixRainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationFrame!: number;
  private drops: number[] = [];
  private chars = '01アイウエオ';
  private fontSize = 12;
  private columns = 0;
  private frameCount = 0;
  private resizeFn!: () => void;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: true })!;

    this.resizeCanvas();

    this.resizeFn = this.resizeCanvas.bind(this);
    window.addEventListener('resize', this.resizeFn);

    this.animate();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const dpr = 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    this.ctx.scale(dpr, dpr);

    this.columns = Math.floor(canvas.width / this.fontSize) + 1;
    this.drops = new Array(this.columns).fill(1).map(() => Math.random() * -50);
  }

  private animate = () => {
    this.frameCount++;

    if (this.frameCount % 2 === 0) {
      const canvas = this.canvasRef.nativeElement;

      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.14)';
      this.ctx.fillRect(0, 0, canvas.width, canvas.height);

      this.ctx.fillStyle = '#1a981a';
      this.ctx.font = `${this.fontSize}px monospace`;

      for (let i = 0; i < this.drops.length; i++) {
        const text = this.chars[Math.floor(Math.random() * this.chars.length)];
        this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

        if (this.drops[i] * this.fontSize > canvas.height && Math.random() > 0.96) {
          this.drops[i] = 0;
        }
        this.drops[i]++;
      }
    }

    this.animationFrame = requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrame);
    if (this.resizeFn) {
      window.removeEventListener('resize', this.resizeFn);
    }
  }
}
