import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExperienceItemComponent, Experience } from './experience-item/experience-item';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly experience: Experience[] = [
    {
      role: 'Engineer 3 (Technology)',
      company: '(Direct Line Group), Aviva',
      location: 'London, UK',
      startDate: 'Feb 2024',
      endDate: 'Present',
      points: [
        "Engineered features across the Home Insurance platform's full policy lifecycle — quote generation, mid-term amendments, and automated renewals — serving millions of active policyholders.",
        'Implemented high-impact customer journeys including direct debit setup, estimated pricing flows and brand management solutions.',
        'Collaborating with the Data Analytics team to integrate end-to-end journey tracking, leveraging real-time user insights to identify friction points and drive data-led UI optimizations.',
        'Co-delivered a new insurance cover type targeting payment affordability, expanding the product to previously unreachable customer segments and driving market growth.',
        'Architected responsive, platform-aware views for web and mobile WebView; refactored NgRx store to eliminate redundant state recalculations across high-traffic PCW journeys.',
        'Integrated Code Defender for runtime script security monitoring and led WCAG AA compliance efforts across critical customer-facing flows.',
        'Enforced strict TypeScript and ESLint configurations to eliminate type ambiguity; led incremental migration to Angular 20, adopting signal-based reactivity and standalone components.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Backbase',
      location: 'Hyderabad, India',
      startDate: 'Nov 2022',
      endDate: 'Feb 2024',
      points: [
        'Led frontend development of two enterprise lending platforms — SME Digital Onboarding and Digital Assist — managing two engineers from technical design through to production delivery.',
        'Built end-to-end lending lifecycle features including document ingestion, and real-time journey analytics dashboards for bank advisors.',
        'Resolved critical cross-team integration blockers in collaboration with Solutions Architects and Backend Engineers, enabling on-time production deployment of both platforms.',
      ],
    },
    {
      role: 'Associate Technology L2',
      company: 'Publicis Sapient',
      location: 'Gurugram, India',
      startDate: 'Jun 2021',
      endDate: 'Oct 2022',
      points: [
' Developed a scalable Angular micro-frontend POC using Nx and Module Federation, focusing on modularity and independent scaling. Integrated dynamic remote loading to improve application performance and streamline the developer experience in a multi-team environment.  '      ],
    },
    {
      role: 'System Engineer - Specialist',
      company: 'Infosys',
      location: 'Pune, India',
      startDate: 'Jul 2019',
      endDate: 'Jun 2021',
      points: [
        'Designed and implemented the core scheduling engine for Meridian, an enterprise collaboration platform, modelling complex business rules for meeting lifecycle management.',
        'Built comprehensive support for instant, time-scheduled, and rule-based recurring meetings, engineering robust handling of complex recurrence patterns and edge cases.',
      ],
    },
  ];
}
