import { Component, OnInit } from '@angular/core';
import { Doucovatel } from '../doucovatel';
import { DoucovateliaService } from './doucovatelia.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-doucovatelia',
  templateUrl: './doucovatelia.component.html',
  styleUrls: ['./doucovatelia.component.css']
})
export class DoucovateliaComponent implements OnInit {

  private title: string = "Zoznam doučovateľov";
  private doucovatelia: Doucovatel[];
  private selectedDoucovatel: Doucovatel;
  private action:string;
  private editedDoucovatel = new Doucovatel("", "", []);
  public stavKomunikacie: string;
  public hlaska: string;

  constructor(private doucovateliaService: DoucovateliaService) { }

  ngOnInit() {
    this.updateDoucovatelia();
  }

  updateDoucovatelia() {
    this.doucovateliaService.getDoucovateliaFromServer().subscribe(doucovatelia => {
      this.doucovatelia = doucovatelia;
    },
    error => {
      console.log("Nastala chyba: " + JSON.stringify(error));
      this.stavKomunikacie = 'error';
    });
  }

  tableRowClick(doucovatel: Doucovatel) {
    this.selectedDoucovatel = doucovatel;
  }

  editedDoucovatelSaved(doucovatel: Doucovatel) {
    if (this.action == 'add') {
      this.doucovateliaService.addDoucovatel(doucovatel).subscribe(response => {
        this.stavKomunikacie = 'added';
        this.hlaska = "Doučovateľ bol úspešne pridaný";
        this.updateDoucovatelia();
      },
      error => this.stavKomunikacie = 'error');
    } else if (this.action == 'edit') {
      this.doucovateliaService.updateDoucovatel(doucovatel).subscribe(response => {
        this.stavKomunikacie = 'updated';
        this.hlaska = "Doučovateľ bol úspešne upravený";
        for (let i = 0; i < this.doucovatelia.length; i++) {
          if (this.doucovatelia[i] === this.selectedDoucovatel) {
            this.doucovatelia[i] = doucovatel;
            this.selectedDoucovatel = undefined;
            break;
          }
        }
      },
      error => this.stavKomunikacie = 'error');
    } else {
      this.doucovateliaService.deleteDoucovatel(doucovatel).subscribe(response => {
        this.stavKomunikacie = 'deleted';
        this.hlaska = "Doučovateľ bol úspešne odobraný";
        this.updateDoucovatelia();
        this.selectedDoucovatel = undefined;
      },
      error => this.stavKomunikacie = 'error');
    }
  }

  addDoucovatelButtonClicked() {
    this.action = 'add';
    this.editedDoucovatel = new Doucovatel("","",[]);
  }

  editDoucovatelButtonClicked(doucovatel: Doucovatel) {
    this.action = 'edit';
    this.editedDoucovatel = new Doucovatel(doucovatel.meno, doucovatel.priezvisko, doucovatel.predmety, doucovatel.id, doucovatel.aktivny);
    $('#doucovatelEditModal').modal('show');
  }

  deleteDoucovatelButtonClicked(doucovatel: Doucovatel) {
    this.action = 'delete';
    this.editedDoucovatel = new Doucovatel(doucovatel.meno, doucovatel.priezvisko, doucovatel.predmety, doucovatel.id, doucovatel.aktivny);
  }

}
