import { Component, signal, effect, inject, Renderer2, computed } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Header } from './header/header';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ResumeComponent } from './resume/resume';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { devIconProvider } from './icon.provider';
import { NgIcon } from '@ng-icons/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './components/language-selector/language-selector';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, HomeComponent, AboutComponent, ResumeComponent, ProjectsComponent, SkillsComponent, NgIcon, TranslateModule, LanguageSelectorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [devIconProvider]
})
export class App {
  maintenance = signal(false);
  isMenuOpen = signal(false);

  // Obfuscated email construction
  readonly contactHref = computed(() => {
    const user = 'mail';
    const domain = 'dhirsch.dev';
    return `mailto:${user}@${domain}`;
  });

  readonly cvGermanHref = signal('assets/files/Dominik_Hirsch_Full_Stack_Developer_CV_public_de.pdf');
  readonly cvEnglishHref = signal('assets/files/Dominik_Hirsch_Full_Stack_Developer_CV_public_en.pdf');

  readonly translate = inject(TranslateService);

  // Reactive signal for current language
  readonly currentLang = toSignal(
    this.translate.onLangChange.pipe(
      map(event => event.lang),
      startWith(this.translate.currentLang || this.translate.defaultLang)
    )
  );

  // Computed CV link based on language
  readonly currentCvHref = computed(() => {
    return this.currentLang() === 'de' ? this.cvGermanHref() : this.cvEnglishHref();
  });

  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');

    const browserLang = this.translate.getBrowserLang();
    const langToUse = browserLang && browserLang.match(/en|de/) ? browserLang : 'en';

    this.translate.use(langToUse);

    effect(() => {
      if (this.isMenuOpen()) {
        this.renderer.addClass(this.document.body, 'overflow-hidden');
      } else {
        this.renderer.removeClass(this.document.body, 'overflow-hidden');
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
