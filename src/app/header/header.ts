import { Component, signal, input, output, inject } from '@angular/core';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../components/button/button';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../components/language-selector/language-selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent, TranslateModule, LanguageSelectorComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    'class': 'fixed top-0 left-0 right-0 z-50 h-24 transition-colors duration-300 ease-in-out bg-gray-800/80 backdrop-blur-sm',
    '(window:scroll)': 'onWindowScroll()',
  }
})
export class Header {
  readonly maintenance = input<boolean>();
  readonly menuOpen = input<boolean>(false);
  readonly contactLink = input<string>('');
  readonly cvLink = input<string>('');
  readonly menuToggled = output<void>();

  readonly title = signal('Dominik Hirsch');
  readonly isScrolled = signal(false);

  readonly translate = inject(TranslateService);

  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;

  onWindowScroll() {
    if (!this.window) {
      return;
    }

    const scrollPosition = this.window.scrollY;
    const isMobile = this.window.innerWidth < 768; // Tailwind's `md` breakpoint

    // On mobile, trigger earlier (1/8 of viewport height).
    // On desktop, trigger later (1/4 of viewport height).
    const thresholdDivisor = isMobile ? 8 : 4;

    const threshold = this.window.innerHeight / thresholdDivisor;

    this.isScrolled.set(scrollPosition > threshold);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
