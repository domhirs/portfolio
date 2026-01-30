import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from '../components/list/list';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ListComponent, BreadcrumbComponent, TranslateModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block scroll-mt-24'
  }
})
export class SkillsComponent {}
