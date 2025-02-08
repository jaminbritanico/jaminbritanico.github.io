import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../components/button-download/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.style.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonComponent]
})
export class AboutComponent {
  img: string = 'assets/images/developer.png';
  name: string = 'Benjamin Britanico';
  number: string = '09054260575';
  email: string = 'jaminbritanico22@gmail.com';
}
