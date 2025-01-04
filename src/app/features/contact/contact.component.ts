import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',  // Correct path to the template file
  styleUrls: ['./contact.style.css'],       // Adjust this to your style file if needed
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {}
