import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.html',
    styleUrls: ['./breadcrumb.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class BreadcrumbComponent {
  label = input<string>();
  size = input<'small' | 'medium' | 'large'>('small');
}
