import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SkillComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experiences/experience.component';
import { ProjectComponent } from './features/project/project.component';
import { EducationComponent } from './features/educations/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoadingComponent, NavBarComponent, 
    HomeComponent, AboutComponent, SkillComponent, ExperienceComponent, ProjectComponent, EducationComponent],
  template: `
  <div *ngIf="isLoading; else mainContent">
    <app-loading></app-loading>
  </div>
  <ng-template #mainContent>
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-about></app-about>
    <app-skill></app-skill>
    <app-experience></app-experience>
    <app-project></app-project>
    <app-education></app-education>
  </ng-template>
  `,
  styleUrls: ['./app.style.css'],
})
export class AppComponent implements OnInit {
  title = 'jaminbritanico-portfolio';

  isLoading = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }
}
