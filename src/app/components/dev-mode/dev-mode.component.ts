import { Component, ViewEncapsulation, Inject, PLATFORM_ID, OnInit, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-dev-mode",
  standalone: true,
  templateUrl: './dev-mode.component.html',
  styleUrls: ['./dev-mode.style.css'],
  encapsulation: ViewEncapsulation.None
})
export class DevModeComponent implements OnInit {
  screenWidth!: number;
  screenHeight!: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getScreenSize(); // Get screen size initially
      this.renderer.listen('window', 'resize', () => this.getScreenSize()); // Listen for resize
    }
  }

  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
