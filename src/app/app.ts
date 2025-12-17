import { Component } from '@angular/core';
import { Header } from './header/header';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ResumeComponent } from './resume/resume';
import { ProjectsComponent } from './projects/projects';
import {devIconProvider} from './icon.provider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, HomeComponent, AboutComponent, ResumeComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [devIconProvider]
})
export class App {}
