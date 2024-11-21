import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',  // Correct path to the template file
  styleUrls: ['./loading.style.css'],       // Adjust this to your style file if needed
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent {}
