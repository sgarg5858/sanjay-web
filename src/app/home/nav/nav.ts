import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class NavComponent {
  private readonly themeService = inject(ThemeService);

  readonly scrolled = signal(false);
  readonly isDark = computed(() => this.themeService.theme() === 'dark');

  toggleTheme(): void {
    this.themeService.toggle();
  }

  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
