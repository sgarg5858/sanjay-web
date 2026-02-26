import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly skills = [
    'TypeScript',
    'JavaScript',
    'Angular',
    'React',
    'NgRx',
    'RxJS',
    'HTML5 & CSS3',
    'SCSS',
    'Nx / Module Federation',
    'Web Accessibility',
    'Jest / Jasmine',
    'Git',
  ];
}
