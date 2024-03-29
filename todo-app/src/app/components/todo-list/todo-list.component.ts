import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  users: any[] = [];

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.loadUsers(); // Carica gli utenti all'avvio del componente
  }

  loadUsers() {
    this.todoservice.getUsers().subscribe((data: any) => {
      this.users = data; // Assegna gli utenti ottenuti dal servizio all'array
    });
  }
}