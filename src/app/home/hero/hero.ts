import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly email = 'sgarg5858@gmail.com';
}
