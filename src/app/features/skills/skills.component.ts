import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillsProp {
  name: string;
  alt: string;
  image: string;
}

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html', 
  styleUrls: ['./skills.style.css'],
  encapsulation: ViewEncapsulation.None
})

export class SkillComponent {

  skills: SkillsProp[] = [
    {
      name: ".Net",
      alt: ".net",
      image: 'assets/images/skills/dotnet.png',
    },
    {
      name: "Jira",
      alt: "jira",
      image: 'assets/images/skills/jira.png',
    },
    {
      name: "C Sharp (C#)",
      alt: "csharp",
      image: 'assets/images/skills/csharp.png',
    },
    {
      name: "Node.js",
      alt: "nodejs",
      image: 'assets/images/skills/nodejs.png',
    },
    {
      name: "Java",
      alt: "java",
      image: 'assets/images/skills/java.webp',
    },
    {
      name: "Angular",
      alt: "angular",
      image: 'assets/images/skills/angular.jpg',
    },
    {
      name: "React JS",
      alt: "reactjs",
      image: 'assets/images/skills/reactjs.png',
    },
    {
      name: "HTML",
      alt: "html",
      image: 'assets/images/skills/html.webp',
    },
    {
      name: "CSS",
      alt: "css",
      image: 'assets/images/skills/css.jpg',
    },
    {
      name: "Javascript",
      alt: "javascript",
      image: 'assets/images/skills/javascript.webp',
    },
    {
      name: "Bootstrap",
      alt: "bootstrap",
      image: 'assets/images/skills/bootstrap.png',
    },
    {
      name: "MsSQL",
      alt: "mssql",
      image: 'assets/images/skills/mssql.svg',
    },
    {
      name: "MySQL",
      alt: "mysql",
      image: 'assets/images/skills/mysql.png',
    }
  ];

}
