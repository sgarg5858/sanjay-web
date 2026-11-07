import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

export interface Chapter {
  title: string;
  teaser: string;
}

const ACCENTS = ['green', 'blue', 'yellow', 'pink', 'orange'];

@Component({
  selector: 'app-chapter-deck',
  templateUrl: './chapter-deck.html',
  styleUrl: './chapter-deck.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'region',
    'aria-roledescription': 'carousel',
    'aria-label': 'Chapters',
    '(keydown.arrowleft)': 'prev()',
    '(keydown.arrowright)': 'next()',
  },
})
export class ChapterDeckComponent {
  readonly chapters = input.required<Chapter[]>();

  protected readonly index = signal(0);
  protected readonly total = computed(() => this.chapters().length);
  protected readonly current = computed(() => this.chapters()[this.index()]);
  /** Wrapped in an array so `@for` re-creates the slide and replays its entry animation. */
  protected readonly currentSlide = computed(() => [this.current()]);
  protected readonly accent = computed(() => `var(--fill-${ACCENTS[this.index() % ACCENTS.length]})`);

  protected pad(n: number): string {
    return n.toString().padStart(2, '0');
  }

  protected go(i: number): void {
    const total = this.total();
    this.index.set((i + total) % total);
  }

  protected next(): void {
    this.go(this.index() + 1);
  }

  protected prev(): void {
    this.go(this.index() - 1);
  }
}
