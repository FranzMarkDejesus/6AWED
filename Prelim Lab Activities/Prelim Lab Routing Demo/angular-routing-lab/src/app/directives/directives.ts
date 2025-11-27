import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  // Control properties
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;
  monthNameStatic: string ='Jun'
  monthNameDynamic: string ='Jun'

  cityList: string[]=["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"]
  studentList: any[] = [
  {stud_name: 'D Esquivel', course: 'Web Development', isActive: false},
  {stud_name: 'J Dizon', course: 'Network Administration', isActive: true},
  {stud_name: 'F Alejandro', course: 'Systems Development', isActive: false},
  {stud_name: 'J David', course: 'CyberSecurity', isActive: false},
  {stud_name: 'C Quintana', course: 'Web Development', isActive: true},
];

  // Methods
  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
