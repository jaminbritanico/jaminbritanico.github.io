import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationsProp {
  level: string;
  school: string;
  course: string;
  year: string;
  address: string;
  description: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',  // Correct path to the template file
  styleUrls: ['./education.style.css'],       // Adjust this to your style file if needed
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent {

  educations: EducationsProp[] = [
    {
      level: "College",
      school: "University of Caloocan City",
      course: "Bachelor Science in Information Technology",
      year: "2017 - 2021",
      address: "Biglang Awa Street Cor 11th Ave Catleya, East Grace Park, Caloocan City",
      description: "More details soon...",
    },
    {
      level: "Vocational",
      school: "Xavier Technical Training Center",
      course: "PC Operation",
      year: "2014",
      address: "524-E Epifanio Delos Santos Avenue, Caloocan City",
      description: "More details soon...",
    },
    {
      level: "Highschool",
      school: "Bagong Barrio National Highschool",
      course: "",
      year: "2010 - 2014",
      address: "M. De Castro Street, Barangay 142, Tanque, Caloocan City",
      description: "More details soon...",
    },
    {
      level: "Elementary School",
      school: "Baesa Elementary School",
      course: "",
      year: "2004 - 2010",
      address: "229 Reparo Road, Caloocan City",
      description: "More details soon...",
    },
    {
      level: "Kinder Garten",
      school: "Jasmin Child Development Center",
      course: "",
      year: "2004",
      address: "Jasmin Street, Reparo Baesa Caloocan City",
      description: "More details soon...",
    },
  ];
}
