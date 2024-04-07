import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthServiceService) { }

  register() {
    this.authService.register(this.username, this.password);
  }
}
