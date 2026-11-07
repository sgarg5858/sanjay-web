import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly chipColors = [
    'var(--fill-orange)',
    'var(--fill-blue)',
    'var(--fill-green)',
    'var(--fill-yellow)',
    'var(--fill-pink)',
  ];

  readonly skills = [
    'Angular 20',
    'NgRx',
    'RxJS',
    'TypeScript',
    'JavaScript',
    'React',
    'HTML5 & CSS3',
    'SCSS',
    'Nx / Module Federation',
    'Web Accessibility',
    'Jest / Jasmine',
    'Git',
  ];
}
