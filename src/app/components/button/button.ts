import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
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

  buttonClasses = computed(() => {
    const baseClasses = 'inline-flex items-center justify-center text-sm font-medium rounded-full px-4 py-2 transition-colors duration-200 ease-in-out gap-2';

    if (this.variant() === 'inverted') {
      return `${baseClasses} text-gray-900 bg-white hover:bg-gray-200 shadow-lg`;
    }

    return `${baseClasses} text-gray-300 bg-gray-700/50 hover:bg-gray-600/50`;
  });
}
