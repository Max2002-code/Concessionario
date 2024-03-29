import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' }, // Reindirizza alla lista delle attività all'avvio dell'applicazione
  { path: 'users', component: UserListComponent } // Percorso per la lista degli utenti
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
