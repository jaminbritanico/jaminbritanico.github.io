import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillsProp {
  name: string;
  alt: string;
  image: string;
  link: string;
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

  openInNewTab(url: string): void {
    if(url != "")
      window.open(url, '_blank');
  }

  skills: SkillsProp[] = [
    {
      name: ".Net",
      alt: ".net",
      image: 'assets/images/skills/dotnet.png',
      link: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet",
    },
    {
      name: "Jira",
      alt: "jira",
      image: 'assets/images/skills/jira.png',
      link: "https://www.atlassian.com/software/jira",
    },
    {
      name: "C Sharp (C#)",
      alt: "csharp",
      image: 'assets/images/skills/csharp.png',
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Node.js",
      alt: "nodejs",
      image: 'assets/images/skills/nodejs.png',
      link: "https://nodejs.org/en",
    },
    {
      name: "Java",
      alt: "java",
      image: 'assets/images/skills/java.webp',
      link: "https://www.java.com/en/",
    },
    {
      name: "Blazor",
      alt: "blazor",
      image: 'assets/images/skills/blazor.png',
      link: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
    },
    {
      name: "Angular",
      alt: "angular",
      image: 'assets/images/skills/angular.jpg',
      link: "https://angular.dev/",
    },
    {
      name: "React JS",
      alt: "reactjs",
      image: 'assets/images/skills/reactjs.png',
      link: "https://react.dev/",
    },
    {
      name: "HTML",
      alt: "html",
      image: 'assets/images/skills/html.webp',
      link: "https://html.com/",
    },
    {
      name: "CSS",
      alt: "css",
      image: 'assets/images/skills/css.jpg',
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Javascript",
      alt: "javascript",
      image: 'assets/images/skills/javascript.webp',
      link: "https://www.javascript.com/",
    },
    {
      name: "Bootstrap",
      alt: "bootstrap",
      image: 'assets/images/skills/bootstrap.png',
      link: "https://getbootstrap.com/",
    },
    {
      name: "MsSQL",
      alt: "mssql",
      image: 'assets/images/skills/mssql.svg',
      link: "https://www.microsoft.com/en-us/sql-server",
    },
    {
      name: "MySQL",
      alt: "mysql",
      image: 'assets/images/skills/mysql.png',
      link: "https://www.mysql.com/",
    }
  ];

}
