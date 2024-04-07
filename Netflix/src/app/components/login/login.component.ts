import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthServiceService) { }

  login() {
    this.authService.login(this.username, this.password);
  }
}
