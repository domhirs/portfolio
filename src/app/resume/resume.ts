import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CardComponent } from '../components/card/card';
import { Experience, Education } from '../models';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CardComponent, TranslateModule],
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block scroll-mt-16'
  }
})
export class ResumeComponent {
  private readonly dataService = inject(DataService);

  workExperience = signal<Experience[]>([]);
  education = signal<Education[]>([]);

  constructor() {
    this.dataService.getExperience().subscribe(data => this.workExperience.set(data));
    this.dataService.getEducation().subscribe(data => this.education.set(data));
  }
}
