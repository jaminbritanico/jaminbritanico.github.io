import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.style.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  img: string = 'assets/images/developer.png';
  name: string = 'Benjamin Britanico';
  number: string = '09054260575';
  email: string = 'jaminbritanico22@gmail.com';
}
