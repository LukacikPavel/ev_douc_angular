import { Injectable } from '@angular/core';
import { Doucovatel } from '../doucovatel';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Predmet } from '../predmet';

@Injectable({
  providedIn: 'root'
})
export class DoucovateliaService {
  private doucovatelia: Doucovatel[] = [new Doucovatel("aaa", "bbb", [new Predmet("qqq","VS")])];

  constructor(private http: HttpClient) { }
  private serverUrl = 'http://localhost:8080/doucovatel';

  getDoucovatelia():Observable<Doucovatel[]> {
    return of(this.doucovatelia);
  }

  getDoucovateliaFromServer():Observable<Doucovatel[]> {
    return this.http.get<Doucovatel[]>(this.serverUrl);
  }

  addDoucovatel(doucovatel:Doucovatel):Observable<any> {
    return this.http.post(this.serverUrl, doucovatel);
  }

  updateDoucovatel(doucovatel:Doucovatel):Observable<any> {
    return this.http.put(this.serverUrl, doucovatel);
  }

  deleteDoucovatel(doucovatel:Doucovatel):Observable<any> {
    return this.http.delete(this.serverUrl + "/" + doucovatel.id);
  }

}
