import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ListComponent } from '../components/list/list';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, ListComponent, BreadcrumbComponent, NgIcon],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block scroll-mt-16'
  }
})
export class HomeComponent {
  protected readonly title = signal('Dominik Hirsch');
}
