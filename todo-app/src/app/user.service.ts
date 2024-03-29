import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private usersUrl ='http://localhost:4200/assets/users.json'; // Modifica il percorso del file JSON degli utenti qui

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl)
      .pipe(
        tap(users => console.log('Users:', users)), // Stampa i dati degli utenti nella console
        catchError(this.handleError) // Gestione degli errori
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Errore del client-side
      console.error('An error occurred:', error.error.message);
    } else {
      // Errore del server-side
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Ritorna un observable con un messaggio di errore utile per il consumo a livello di componente
    return throwError('Something bad happened; please try again later.');
  }
}