import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',  // Correct path to the template file
  styleUrls: ['./education.style.css'],       // Adjust this to your style file if needed
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent {}
