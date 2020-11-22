import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http: HttpClient) { }

  getCribs() {
    return this.http.get('/server/api/v1/cribs');
  }

  getCrib(id: number) {
    return this.http.get('/server/api/v1/cribs' + id);
  }

  createCribRegistration(crib) {
    let body = JSON.stringify(crib);
    return this.http.post('/server/api/v1/cribs', body, httpOptions);
  }

}
