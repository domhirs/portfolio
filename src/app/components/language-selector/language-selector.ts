import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {
  currentLang = input.required<string>();
  languageChange = output<string>();

  selectLanguage(lang: string) {
    if (lang !== this.currentLang()) {
      this.languageChange.emit(lang);
    }
  }
}
