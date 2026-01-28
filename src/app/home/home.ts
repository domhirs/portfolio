import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ListComponent } from '../components/list/list';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb';
import {NgIcon} from '@ng-icons/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, ListComponent, BreadcrumbComponent, NgIcon, TranslatePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block scroll-mt-16 pt-16'
  }
})
export class HomeComponent {
  protected readonly title = signal('Dominik Hirsch');
}
