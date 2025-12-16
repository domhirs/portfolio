import {Component, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ListComponent } from '../components/list/list';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, ListComponent, BreadcrumbComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('Dominik Hirsch');

}
