import { Component, OnInit } from '@angular/core';
import { Predmet } from '../predmet';
import { PredmetyService } from './predmety.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-predmety',
  templateUrl: './predmety.component.html',
  styleUrls: ['./predmety.component.css']
})
export class PredmetyComponent implements OnInit {

  private title: string = "Zoznam predmetov";
  private predmety: Predmet[];
  private selectedPredmet: Predmet;
  private action:string;
  private editedPredmet: Predmet = new Predmet("","");
  private stavKomunikacie: string;
  private hlaska: string;

  constructor(private predmetyService: PredmetyService) { }

  ngOnInit() {
    this.updatePredmety();
  }

  updatePredmety() {
    this.predmetyService.getPredmetyFromServer().subscribe(predmety => {
      this.predmety = predmety;
    },
    error => {
      console.log("Nastala chyba: " + JSON.stringify(error));
      this.stavKomunikacie = 'error';
    });
  }

  tableRowClick(predmet: Predmet){
    this.selectedPredmet = predmet;
  }

  editedPredmetSaved(predmet: Predmet) {
    if (this.action == 'add') {
      this.predmetyService.addPredmet(predmet).subscribe(response => {
        this.stavKomunikacie = 'added';
        this.hlaska = "Predmet bol úspešne pridaný";
        this.updatePredmety();
      },
      error => this.stavKomunikacie = 'error');
    } else if (this.action == 'edit') {
      this.predmetyService.updatePredmet(predmet).subscribe(response => {
        this.stavKomunikacie = 'updated';
        this.hlaska = "Predmet bol úspešne upravený";
        for (let i = 0; i < this.predmety.length; i++) {
          if (this.predmety[i] === this.selectedPredmet) {
            this.predmety[i] = predmet;
            this.selectedPredmet = undefined;
            break;
          }
        }
      },
      error => this.stavKomunikacie = 'error');
    } else {
      this.predmetyService.deletePredmet(predmet).subscribe(response => {
        this.stavKomunikacie = 'deleted';
        this.hlaska = "Predmet bol úspešne odobraný";
        this.updatePredmety();
        this.selectedPredmet = undefined;
      },
      error => this.stavKomunikacie = 'error');
    }
  }

  addPredmetButtonClicked() {
    this.action = 'add';
    this.editedPredmet = new Predmet("", "");
  }

  editPredmetButtonClicked(predmet: Predmet) {
    this.action = 'edit';
    this.editedPredmet = new Predmet(predmet.nazov, predmet.stupenStudia, predmet.id);
    $('#predmetEditModal').modal('show');
  }

  deletePredmetButtonClicked(predmet: Predmet) {
    this.action = 'delete';
    this.editedPredmet = new Predmet(predmet.nazov, predmet.stupenStudia, predmet.id);
  }

}
