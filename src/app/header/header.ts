import { Component, signal, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../components/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    'class': 'fixed top-0 left-0 right-0 z-50 h-24 transition-colors duration-300 ease-in-out',
    '[class.bg-gray-800/80]': 'isScrolled()',
    '[class.backdrop-blur-sm]': 'isScrolled()',
  }
})
export class Header {
  protected readonly title = signal('Dominik Hirsch');
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Trigger when user has scrolled more than a fourth the viewport height
    this.isScrolled.set(scrollPosition > window.innerHeight / 4);
  }
}
