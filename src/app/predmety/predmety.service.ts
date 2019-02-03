import { Injectable } from '@angular/core';
import { Predmet } from '../predmet';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredmetyService {
  private predmety: Predmet[] = [new Predmet("aaa", "VS")];

  constructor(private http: HttpClient) { }
  private serverUrl = 'http://localhost:8080/doucovanePredmety';

  getPredmety():Observable<Predmet[]> {
    return of(this.predmety);
  }

  getPredmetyFromServer(): Observable<Predmet[]> {
    return this.http.get<Predmet[]>(this.serverUrl);
  }

  addPredmet(predmet:Predmet):Observable<any> {
    return this.http.post(this.serverUrl, predmet);
  }

  updatePredmet(predmet:Predmet):Observable<any> {
    return this.http.put(this.serverUrl, predmet);
  }

  deletePredmet(predmet:Predmet):Observable<any> {
    return this.http.delete(this.serverUrl + "/" + predmet.id);
  }

}
