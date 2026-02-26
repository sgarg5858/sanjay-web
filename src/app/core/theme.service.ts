import { effect, inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';
const TRANSITION_CLASS = 'theme-transitioning';
const TRANSITION_DURATION_MS = 400;

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private hasManualOverride = !!localStorage.getItem(STORAGE_KEY);

  readonly theme = signal<Theme>(this.resolveInitialTheme());

  constructor() {
    // Apply data-theme attribute whenever the signal changes
    effect(() => {
      this.document.documentElement.setAttribute('data-theme', this.theme());
    });

    // Sync with OS-level changes (only if user hasn't manually overridden)
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!this.hasManualOverride) {
          this.theme.set(e.matches ? 'dark' : 'light');
        }
      });
  }

  toggle(): void {
    this.hasManualOverride = true;
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';

    localStorage.setItem(STORAGE_KEY, next);
    this.applyWithTransition(next);
  }

  private resolveInitialTheme(): Theme {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private applyWithTransition(theme: Theme): void {
    const html = this.document.documentElement;
    html.classList.add(TRANSITION_CLASS);
    this.theme.set(theme);
    setTimeout(
      () => html.classList.remove(TRANSITION_CLASS),
      TRANSITION_DURATION_MS,
    );
  }
}
