import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectsProp {
  code: string;
  name: string;
  status: string;
  year: string;
  technology: string;
  description: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.style.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent {

  projects: ProjectsProp[] = [
    {
      code: "OPS",
      name: "OnlinePay System",
      status: "",
      year: "",
      technology: "",
      description: "More details soon..."
    },
    {
      code: "FMS",
      name: "Fraud Management System",
      status: "",
      year: "",
      technology: "",
      description: "More details soon..."
    },
    {
      code: "BO",
      name: "Back Office",
      status: "",
      year: "",
      technology: "",
      description: "More details soon..."
    },
    {
      code: "ECS",
      name: "Employee Clearance System",
      status: "",
      year: "",
      technology: "",
      description: "More details soon..."
    },
    {
      code: "CMS",
      name: "Career Management System",
      status: "",
      year: "",
      technology: "",
      description: "More details soon..."
    },
    {
      code: "EMS",
      name: "Employee Management System",
      status: "",
      year: "",
      technology: "",
      description: "More details soon..."
    },
    {
      code: "ICMS",
      name: "Insurance Claim Monitoring System",
      status: "",
      year: "",
      technology: "",
      description: "More details soon..."
    },
    {
      code: "DICE",
      name: "Digitize Interactive Content Enhancement E-Learning System",
      status: "Done",
      year: "2017",
      technology: "[ C#, MySQL, Javascript ]",
      description: "Digitize is an advanced e-learning platform designed to enhance digital education through interactive and engaging content. It empowers educators to create, manage, and deliver multimedia-rich lessons while enabling students to learn through dynamic activities, real-time feedback, and personalized learning paths. With a focus on interactivity and usability, Digitize transforms traditional education into a more immersive and effective digital learning experience."
    },
  ];
}
