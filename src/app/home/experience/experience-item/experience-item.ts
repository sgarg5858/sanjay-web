import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  points: string[];
}

@Component({
  selector: 'app-experience-item',
  styleUrl: './experience-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'timeline-item',
    role: 'listitem',
  },
  template: `
    <div class="timeline-meta">
      <span class="timeline-dates">{{ job().startDate }} – {{ job().endDate }}</span>
    </div>
    <div class="timeline-content">
      <h3 class="timeline-role">{{ job().role }}</h3>
      <div class="timeline-meta-row">
        <span class="timeline-company">{{ job().company }}</span>
        <span class="timeline-location" aria-label="Location">{{ job().location }}</span>
      </div>
      <ul class="timeline-points" aria-label="Key contributions">
        @for (point of job().points; track point) {
          <li>{{ point }}</li>
        }
      </ul>
    </div>
  `,
})
export class ExperienceItemComponent {
  readonly job = input.required<Experience>();
}
