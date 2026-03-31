import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type AppTheme = 'deep-space' | 'ocean-breeze';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;

  readonly isDark = signal(this.document.documentElement.classList.contains('dark'));

  setTheme(theme: AppTheme): void {
    this.document.documentElement.dataset['theme'] = theme;
  }

  toggle() {
    const newIsDark = !this.isDark();
    this.isDark.set(newIsDark);

    if (newIsDark) {
      this.document.documentElement.classList.add('dark');
      this.window?.localStorage.setItem('theme', 'dark');
    } else {
      this.document.documentElement.classList.remove('dark');
      this.window?.localStorage.setItem('theme', 'light');
    }
  }
}
