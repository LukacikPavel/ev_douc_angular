import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { PredmetyComponent } from './predmety/predmety.component';
import { PredmetyEditComponent } from './predmety-edit/predmety-edit.component';
import { DoucovateliaComponent } from './doucovatelia/doucovatelia.component';
import { DoucovateliaEditComponent } from './doucovatelia-edit/doucovatelia-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentEditComponent,
    PredmetyComponent,
    PredmetyEditComponent,
    DoucovateliaComponent,
    DoucovateliaEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
