import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectsProp {
  code: string;
  name: string;
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
      description: "More details soon..."
    },
    {
      code: "FMS",
      name: "Fraud Management System",
      description: "More details soon..."
    },
    {
      code: "BO",
      name: "Back Office",
      description: "More details soon..."
    },
    {
      code: "ECS",
      name: "Employee Clearance System",
      description: "More details soon..."
    },
    {
      code: "CMS",
      name: "Career Management System",
      description: "More details soon..."
    },
    {
      code: "EMS",
      name: "Employee Management System",
      description: "More details soon..."
    },
    {
      code: "ICMS",
      name: "Insurance Claim Monitoring System",
      description: "More details soon..."
    },
  ];
}
