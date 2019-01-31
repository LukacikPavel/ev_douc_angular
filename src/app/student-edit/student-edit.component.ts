import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Student } from '../student';

declare var $:any;

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnChanges {
  @Input() private student:Student;
  @Input() private actionWithStudent:string;
  @Output() savedStudent = new EventEmitter<Student>();

  constructor() { }

  ngOnChanges() {
  }

  get actualStudent(): string {
    return JSON.stringify(this.student);
  }

  get title():string{
    if (this.actionWithStudent == 'add'){
      return 'Pridávanie študenta';
    } else {
      return 'Editácia študenta';
    }
  }

  onSubmit() {
    this.savedStudent.emit(this.student);
    $('#studentEditModal').modal('hide');
  }
  
}
