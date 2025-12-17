import { Component, signal, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../components/button/button';
import { ListComponent } from '../components/list/list';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent, ListComponent, BreadcrumbComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly title = signal('Dominik Hirsch');
  isShrunken = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) { // Adjust this value as needed
      this.isShrunken.set(true);
    } else {
      this.isShrunken.set(false);
    }
  }
}
