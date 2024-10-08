import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  isDiv1Visible: boolean = true;

  hideDiv1(): void {
    this.isDiv1Visible = false;
  }

  showDiv1(): void {
    this.isDiv1Visible = true;
  }

  // using toggle
  isDiv2Visible: boolean = true;

  toggle(): void {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  // using equality
  num1: string = '';
  num2: string = '';

  // using checkedbox
  isActive: boolean = true;

  //using dropdown
  selectedCountry: string = '';

  // For Loop
  cityArray: string[] = ['Mumbai', 'Pune', 'Delhi', 'Amravati', 'Nagpur'];

  // Students Array
  students: Student[] = [
    { id: 9001, name: 'Aditya', city: 'Amravati', isActive: true },
    { id: 9002, name: 'sanket', city: 'Nanded', isActive: false },
    { id: 9003, name: 'Ganesh', city: 'Pune', isActive: false },
    { id: 9004, name: 'Lukesh', city: 'Nanded', isActive: false },
    { id: 9005, name: 'Prajwal', city: 'Pune', isActive: true },
    { id: 9006, name: 'Bhavesh', city: 'Pune', isActive: false },
  ];

  textGreen: string = 'color: green;';
  textRed: string = 'color: red;';
}
