import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
