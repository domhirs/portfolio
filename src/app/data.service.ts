import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, startWith, switchMap} from 'rxjs';
import {ProjectModel} from './models';
import { Experience, Education } from './models';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);

  getProjects(): Observable<ProjectModel[]> {
    return this.translate.onLangChange.pipe(
      startWith({ lang: this.translate.currentLang }),
      switchMap(event => {
        const lang = event.lang || 'de'; // Fallback to 'de'
        return this.http.get<ProjectModel[]>(`/assets/data/projects.${lang}.json`);
      })
    );
  }

  getExperience(): Observable<Experience[]> {
    return this.translate.onLangChange.pipe(
      startWith({ lang: this.translate.currentLang }),
      switchMap(event => {
        const lang = event.lang || 'de';
        return this.http.get<Experience[]>(`/assets/data/experience.${lang}.json`);
      })
    );
  }

  getEducation(): Observable<Education[]> {
    return this.translate.onLangChange.pipe(
      startWith({ lang: this.translate.currentLang }),
      switchMap(event => {
        const lang = event.lang || 'de';
        return this.http.get<Education[]>(`/assets/data/education.${lang}.json`);
      })
    );
  }
}
