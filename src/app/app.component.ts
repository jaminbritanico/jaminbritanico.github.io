import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { ExperienceComponent } from './features/experiences/experience.component';
import { EducationComponent } from './features/educations/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoadingComponent, NavBarComponent, HomeComponent, ExperienceComponent, EducationComponent],  // Import RouterOutlet and other components here
  template: `
  <div *ngIf="isLoading; else mainContent">
    <app-loading></app-loading>
  </div>
  <ng-template #mainContent>
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-experience></app-experience>
    <app-education></app-education>
  </ng-template>
  `,
  styleUrls: ['./app.style.css'],
})
export class AppComponent implements OnInit {
  title = 'jaminbritanico-portfolio';

  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // Display loading for 5 seconds
  }
}
