import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {}
