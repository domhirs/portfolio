import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../components/card/card';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {}
