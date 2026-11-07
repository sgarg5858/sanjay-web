import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Project {
  name: string;
  status: string;
  url: string;
  summary: string;
  topics: string[];
  stack: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      name: 'AI, Unboxed',
      status: 'Building now',
      url: 'https://sgarg5858.github.io/ai-unboxed',
      summary:
        'An interactive guide to how modern AI works, starting with assistants like Claude, ChatGPT and Gemini and the LLMs inside them. It explains each idea through chapters of hands-on, slide-by-slide explainers instead of walls of text.',
      topics: [
        'How assistants work',
        'Assistant architecture',
        'Tokens & embeddings',
        'Attention & transformers',
        'Hallucinations',
        'Reasoning',
      ],
      stack: ['Angular', 'TypeScript', 'Signals', 'SCSS'],
    },
  ];
}
