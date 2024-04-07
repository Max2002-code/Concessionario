import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor() { }

  isLoggedIn(): boolean{
    return true;
  }

  login(username: string, password: string) {
    // Chiamata HTTP per l'autenticazione
    // Ricevi il token e memorizzalo
  }

  register(username: string, password: string) {
    // Chiamata HTTP per la registrazione
  }
}
