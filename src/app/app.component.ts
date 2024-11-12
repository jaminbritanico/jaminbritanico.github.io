import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EducationComponent } from './features/educations/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, EducationComponent],  // Import RouterOutlet and other components here
  template: `
  <home></home>
  <app-education></app-education>
  `,
  styleUrls: ['./app.style.css'],
})
export class AppComponent {
  title = 'jaminbritanico-portfolio';
}
