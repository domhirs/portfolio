import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  title = input<string>();
}
