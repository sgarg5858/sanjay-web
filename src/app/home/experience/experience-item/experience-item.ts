import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

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
    role: 'listitem',
  },
  template: `
    <div class="job-side">
      <p class="job-dates">{{ job().startDate }} – {{ job().endDate }}</p>
      <p class="job-location"><span class="visually-hidden">Location: </span>{{ job().location }}</p>
      @if (isCurrent()) {
        <p class="job-now">Now</p>
      }
    </div>
    <div class="job-main">
      <h3 class="job-role">{{ job().role }}</h3>
      <p class="job-company">{{ job().company }}</p>
      <ul class="job-points" aria-label="Key contributions">
        @for (point of job().points; track point) {
          <li>{{ point.trim() }}</li>
        }
      </ul>
    </div>
  `,
})
export class ExperienceItemComponent {
  readonly job = input.required<Experience>();
  readonly isCurrent = computed(() => this.job().endDate === 'Present');
}
