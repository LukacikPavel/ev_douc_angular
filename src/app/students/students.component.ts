import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
declare var $:any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private title: string = "Zoznam študentov";
  private students: Student[] = [new Student("aaa", "bbb", "VS", "000", "abc"), new Student("aXa", "bcb", "SS", "001", "def")];
  private selectedStudent: Student;
  private action = 'add';
  private editedStudent = new Student("", "", "", "", "");

  constructor() { }

  ngOnInit() {
  }

  tableRowClick(student: Student) {
    this.selectedStudent = student;
  }

  editedStudentSaved(student: Student) {
    if (this.action == 'add'){
      this.students.push(student);
    } else {
      for(let i = 0; i < this.students.length; i++){
        if (this.students[i] === this.selectedStudent){
          this.students[i] = student;
          this.selectedStudent = undefined;
          break;
        }
      }
    }
  }

  addUserButtonClicked(){
    this.action = 'add';
    this.editedStudent = new Student("", "", "", "", "");
  }

  editUserClicked(student:Student) {
    this.action = 'edit';
    this.editedStudent = student.clone();
    $('#studentEditModal').modal('show');
  }

}
