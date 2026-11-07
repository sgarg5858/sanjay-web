import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Chapter, ChapterDeckComponent } from './chapter-deck/chapter-deck';

export interface Project {
  name: string;
  status: string;
  url: string;
  summary: string;
  chapters: Chapter[];
  stack: string[];
  demoTokens: { text: string; id: number }[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  imports: [ChapterDeckComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly tokenColors = ['green', 'blue', 'yellow', 'pink', 'orange'];

  readonly projects: Project[] = [
    {
      name: 'AI, Unboxed',
      status: 'Building now',
      url: 'https://sgarg5858.github.io/ai-unboxed',
      summary:
        'An interactive guide to how modern AI works, starting with assistants like Claude, ChatGPT and Gemini and the LLMs inside them. It explains each idea through chapters of hands-on, slide-by-slide explainers instead of walls of text.',
      chapters: [
        {
          title: 'How assistants work',
          teaser: 'What actually happens between hitting send and seeing a reply.',
        },
        {
          title: 'Assistant architecture',
          teaser: 'The model, the system prompt, tools and memory, and how they fit together.',
        },
        {
          title: 'Tokens & embeddings',
          teaser: 'How text becomes numbers, and why meaning ends up as a direction in space.',
        },
        {
          title: 'Attention & transformers',
          teaser: 'How every word decides which other words matter to it.',
        },
        {
          title: 'Hallucinations',
          teaser: 'Why fluent text can still be wrong, and what helps keep models honest.',
        },
        {
          title: 'Reasoning',
          teaser: 'What "thinking step by step" really changes inside a model.',
        },
      ],
      stack: ['Angular', 'TypeScript', 'Signals', 'SCSS'],
      demoTokens: [
        { text: 'How', id: 4438 },
        { text: ' does', id: 1587 },
        { text: ' AI', id: 15592 },
        { text: ' think', id: 1781 },
        { text: '?', id: 30 },
      ],
    },
  ];
}
