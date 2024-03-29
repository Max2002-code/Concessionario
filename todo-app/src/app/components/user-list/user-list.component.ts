import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service'; // Importa il servizio UserService

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Array per memorizzare gli utenti

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(); // Carica gli utenti all'avvio del componente
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data; // Assegna gli utenti ottenuti dal servizio all'array
    });
  }
}