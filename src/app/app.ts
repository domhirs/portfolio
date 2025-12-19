import { Component, signal, effect, inject, Renderer2, computed } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Header } from './header/header';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ResumeComponent } from './resume/resume';
import { ProjectsComponent } from './projects/projects';
import { devIconProvider } from './icon.provider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, HomeComponent, AboutComponent, ResumeComponent, ProjectsComponent],
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

  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  constructor() {
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
}
