import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.html',
    styleUrls: ['./about.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TranslatePipe
    ]
})
export class AboutComponent {}
