import { Injectable } from '@angular/core';
import { Student } from '../student';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students: Student[] = [new Student("aaa2", "bbb", "VS", "000", "abc"), new Student("aXa2", "bcb", "SS", "001", "def")];

  constructor(private http: HttpClient) { }
  private serverUrl = 'http://localhost:8080/student';

  getStudents():Observable<Student[]> {
    return of(this.students);
  }

  getStudentsFromServer(): Observable<Student[]> {
    return this.http.get<Student[]>(this.serverUrl);
  }

  addStudent(student:Student):Observable<any> {
    return this.http.post(this.serverUrl, student);
  }

  updateStudent(student: Student):Observable<any> {
    return this.http.put(this.serverUrl, student);
  }

  deleteStudent(student: Student):Observable<any> {
    return this.http.delete(this.serverUrl + "/" + student.id);
  }

}
