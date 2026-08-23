import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'portfolio';

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          return child?.snapshot.data['description'] as string | undefined;
        }),
        filter((description): description is string => !!description),
        takeUntilDestroyed(),
      )
      .subscribe((description) => {
        this.meta.updateTag({ name: 'description', content: description });
      });
  }
}
