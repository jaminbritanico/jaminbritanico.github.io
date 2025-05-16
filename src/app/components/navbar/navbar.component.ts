import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevModeComponent } from '../../components/dev-mode/dev-mode.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.style.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, DevModeComponent]
})
export class NavBarComponent {
  displayDevMode = false;
  iconPath = 'assets/svg/moon.svg';
  
  backToHome() {
    window.location.href = "#home";
  }
  changeTheme() {
    const theme = localStorage.getItem('theme') || 'default';
    if(theme == "default")
    {
      localStorage.setItem('theme', "dark-theme");
      this.iconPath = 'assets/svg/moon.svg';
    }
    else
    {
      localStorage.setItem('theme', "default");
      this.iconPath = 'assets/svg/sun.svg';
    }
    document.body.className = theme;
  }
}
