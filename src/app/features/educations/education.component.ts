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
      description: "My college journey is where I truly discovered my passion for programming. In my first year, I was introduced to C and C++, and from the moment I started writing code, I was hooked. The logic, structure, and problem-solving aspect of programming fascinated me. What started as a simple introduction to coding quickly grew into a deep interest that shaped my career goals. That experience marked the beginning of my journey into the world of software development.",
    },
    {
      level: "Vocational",
      school: "Xavier Technical Training Center",
      course: "PC Operation",
      year: "2014",
      address: "524-E Epifanio Delos Santos Avenue, Caloocan City",
      description: "In 2014, I pursued a vocational course in PC Operation at TESDA to further develop my computer skills. Upon successful completion of the program, I received a certificate recognizing my proficiency in basic computer operations.",
    },
    {
      level: "Highschool",
      school: "Bagong Barrio National Highschool",
      course: "",
      year: "2010 - 2016",
      address: "M. De Castro Street, Barangay 142, Tanque, Caloocan City",
      description: "I started my high school education at Baesa High School, completing my 1st Year in 2011. After a break from school, I transferred to Bagong Barrio National High School in 2013, where I completed my 2nd Year. In 2014, I pursued technical training at TESDA, taking a course in PC Operation. The following year, in 2015, I enrolled in the Alternative Learning System (ALS) to continue my education. I successfully graduated and received my High School Diploma in 2016.",
    },
    {
      level: "Elementary School",
      school: "Baesa Elementary School",
      course: "",
      year: "2004 - 2010",
      address: "229 Reparo Road, Caloocan City",
      description: "Completed elementary education with steady academic progress and active participation in school activities.",
    },
    {
      level: "Kinder Garten",
      school: "Jasmin Child Development Center",
      course: "",
      year: "2004",
      address: "Jasmin Street, Reparo Baesa Caloocan City",
      description: "Began formal learning through Kinder A and Kinder B programs, developing core skills in preparation for elementary education.",
    },
  ];
}
