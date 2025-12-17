import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DataService} from '../data.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ProjectCard} from './project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  imports: [ProjectCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly dataService = inject(DataService);
  readonly projects = toSignal(this.dataService.getProjects(), {initialValue: []})
}
