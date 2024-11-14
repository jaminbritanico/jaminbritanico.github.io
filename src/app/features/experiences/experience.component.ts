import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',  // Correct path to the template file
  styleUrls: ['./experience.style.css'],       // Adjust this to your style file if needed
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent {}
