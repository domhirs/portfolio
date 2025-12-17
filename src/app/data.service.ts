import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './project';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/assets/data/projects.json');
  }
}
