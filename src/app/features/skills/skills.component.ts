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
      name: "C Sharp (C#)",
      alt: "csharp",
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png',
    },
    {
      name: "Node.js",
      alt: "nodejs",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4P-pt61PeTsAj_1b-Bb_MmFpUO22360XrQw&s',
    },
    {
      name: "Java",
      alt: "java",
      image: 'https://static.vecteezy.com/system/resources/previews/048/332/150/non_2x/java-programming-language-java-logo-free-png.png',
    },
    {
      name: "Angular",
      alt: "angular",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBpy5FHXK_NNT2Pw9ELbrRajO5HDc-rNI3A&s',
    },
    {
      name: "React JS",
      alt: "reactjs",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s',
    },
    {
      name: "HTML",
      alt: "html",
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030115.png?f=webp',
    },
    {
      name: "CSS",
      alt: "css",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s',
    },
    {
      name: "Javascript",
      alt: "javascript",
      image: 'https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg',
    },
    {
      name: "Bootstrap",
      alt: "bootstrap",
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
    },
    {
      name: "MsSQL",
      alt: "mssql",
      image: 'https://www.svgrepo.com/download/303229/microsoft-sql-server-logo.svg',
    },
    {
      name: "MySQL",
      alt: "mysql",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaw8EmkSlum0mRvWmmdQLUkXR9DlwutZ7_Q&s',
    }
  ];

}
