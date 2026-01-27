import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DataService} from '../data.service';
import {toSignal} from '@angular/core/rxjs-interop';
import { CardComponent } from '../components/card/card';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  imports: [CardComponent, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block scroll-mt-16'
  }
})
export class ProjectsComponent {
  private readonly dataService = inject(DataService);
  readonly projects = toSignal(this.dataService.getProjects(), {initialValue: []})
}
