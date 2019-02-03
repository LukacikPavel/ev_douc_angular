import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Predmet } from '../predmet';

declare var $:any;

@Component({
  selector: 'app-predmety-edit',
  templateUrl: './predmety-edit.component.html',
  styleUrls: ['./predmety-edit.component.css']
})
export class PredmetyEditComponent implements OnChanges {
  @Input() private predmet:Predmet;
  @Input() private actionWithPredmet:string;
  @Output() savedPredmet = new EventEmitter<Predmet>();

  constructor() { }

  ngOnChanges() {
  }

  get actualPredmet(): string {
    return JSON.stringify(this.predmet);
  }

  get title():string{
    if (this.actionWithPredmet == 'add'){
      return 'Pridávanie predmetu';
    } else {
      return 'Editácia predmetu';
    }
  }

  onSubmit() {
    this.savedPredmet.emit(this.predmet);
    $('#predmetEditModal').modal('hide');
    $('#predmetDeleteModal').modal('hide');

  }

}
