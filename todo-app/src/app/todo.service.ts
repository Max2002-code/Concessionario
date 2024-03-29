import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = 'assets/todos.json'; // Percorso del file JSON delle attività
  getUsers: any;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.todosUrl)
      .pipe(
        tap(todos => console.log('Todos:', todos)), // Stampa i dati delle attività nella console
        catchError(this.handleError) // Gestione degli errori
      );
  }

  // Metodo per gestire gli errori
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.'); // Rilancia l'errore per gestirlo a livello di componente
  }
}