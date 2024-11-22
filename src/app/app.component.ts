import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ExperienceComponent } from './features/experiences/experience.component';
import { EducationComponent } from './features/educations/education.component';
import { LoadingComponent } from './components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoadingComponent, HomeComponent, ExperienceComponent, EducationComponent],  // Import RouterOutlet and other components here
  template: `
  <div *ngIf="isLoading; else mainContent">
    <app-loading></app-loading>
  </div>
  <ng-template #mainContent>
    <home></home>
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
    }, 5000); // Display loading for 5 seconds
  }
}
