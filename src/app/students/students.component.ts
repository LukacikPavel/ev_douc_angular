import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from './students.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private title: string = "Zoznam študentov";
  private students: Student[];
  private selectedStudent: Student;
  private action:string;
  private editedStudent = new Student("", "", "", "", "");
  public stavKomunikacie: string;
  public hlaska: string;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.updateStudents();
  }

  updateStudents() {
    this.studentsService.getStudentsFromServer().subscribe(students => {
      this.students = students;
    },
      error => {
        console.log("Nastala chyba: " + JSON.stringify(error));
        this.stavKomunikacie = 'error';
      });
  }

  tableRowClick(student: Student) {
    this.selectedStudent = student;
  }

  editedStudentSaved(student: Student) {
    if (this.action == 'add') {
      this.studentsService.addStudent(student).subscribe(response => {
        this.stavKomunikacie = 'added';
        this.hlaska = "Študent bol úspešne pridaný";
        this.updateStudents();
      },
        error => this.stavKomunikacie = 'error')
    } else if (this.action == 'edit') {
      this.studentsService.updateStudent(student).subscribe(response => {
        this.stavKomunikacie = 'updated';
        this.hlaska = "Študent bol úspešne upravený";
        for (let i = 0; i < this.students.length; i++) {
          if (this.students[i] === this.selectedStudent) {
            this.students[i] = student;
            this.selectedStudent = undefined;
            break;
          }
        }
      },
        error => this.stavKomunikacie = 'error');
    } else {
      this.studentsService.deleteStudent(student).subscribe(response => {
        this.stavKomunikacie = 'deleted';
        this.hlaska = "Študent bol úspešne odobraný";
        this.updateStudents();
        this.selectedStudent = undefined;
      },
        error => this.stavKomunikacie = 'error');
    }
  }

  addStudentButtonClicked() {
    this.action = 'add';
    this.editedStudent = new Student("", "", "", "", "");
  }

  editStudentButtonClicked(student: Student) {
    this.action = 'edit';
    this.editedStudent = new Student(student.meno, student.priezvisko, student.stupenStudia, student.telefon, student.email, student.id, student.aktivny);
    $('#studentEditModal').modal('show');
  }

  deleteStudentButtonClicked(student: Student) {
    this.action = 'delete';
    this.editedStudent = new Student(student.meno, student.priezvisko, student.stupenStudia, student.telefon, student.email, student.id, student.aktivny);
  }

}
