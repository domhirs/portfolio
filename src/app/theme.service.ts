import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type AppTheme = 'deep-space' | 'ocean-breeze';

const STORAGE_KEY = 'theme';
const VALID_THEMES: AppTheme[] = ['deep-space', 'ocean-breeze'];

function resolveInitialTheme(): AppTheme {
  const stored = localStorage.getItem(STORAGE_KEY) as AppTheme | null;
  if (stored && VALID_THEMES.includes(stored)) return stored;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'deep-space' : 'ocean-breeze';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly _theme = signal<AppTheme>(resolveInitialTheme());

  readonly theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'deep-space');

  constructor() {
    effect(() => {
      this.document.documentElement.dataset['theme'] = this._theme();
    });

    // Follow system preference changes when the user hasn't stored a manual choice.
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        this._theme.set(e.matches ? 'deep-space' : 'ocean-breeze');
      }
    });
  }

  toggle(): void {
    const next: AppTheme = this._theme() === 'deep-space' ? 'ocean-breeze' : 'deep-space';
    this._theme.set(next);
    localStorage.setItem(STORAGE_KEY, next);
  }
}
