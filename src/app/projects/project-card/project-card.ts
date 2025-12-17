import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block bg-primary-800/50 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105',
  },
})
export class ProjectCard {
  project = input.required<Project>();
}
