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
    }
  ];

}
