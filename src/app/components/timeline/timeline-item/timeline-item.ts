import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  templateUrl: './timeline-item.html',
  styleUrls: ['./timeline-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class TimelineItemComponent {
  date = input<string>('');
  isFirst = input<boolean>(false);
  isLast = input<boolean>(false);
}
