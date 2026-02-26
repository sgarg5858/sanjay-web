import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly email = 'hello@sanjay.dev';
  readonly linkedInUrl = 'https://www.linkedin.com/in/sanjay-garg-26bab6153/';
  readonly githubUrl = 'https://github.com/sanjay-garg';
  readonly currentYear = new Date().getFullYear();
}
