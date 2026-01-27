import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from './models/project.model';
import { Experience, Education } from './models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);

  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>('/assets/data/projects.json');
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('/assets/data/experience.json');
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>('/assets/data/education.json');
  }
}
