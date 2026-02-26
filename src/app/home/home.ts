import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from './nav/nav';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { ExperienceComponent } from './experience/experience';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [NavComponent, HeroComponent, AboutComponent, ExperienceComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
