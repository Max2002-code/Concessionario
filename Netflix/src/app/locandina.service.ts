// locandina.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocandinaService {
  private jsonURL = 'assets/db.json'; // Percorso del file JSON locale

  constructor(private http: HttpClient) { }

  getLocandine(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
