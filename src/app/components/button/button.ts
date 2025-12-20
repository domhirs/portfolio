import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  href = input<string>();
  label = input<string>();
  variant = input<'default' | 'inverted'>('default');
  icon = input<string>();
  target = input<string>('_self');
}
