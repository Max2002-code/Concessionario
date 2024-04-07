import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authServiceService: AuthServiceService) { }

  isLoggedIn(): boolean {
    return this.authServiceService.isLoggedIn();
  }
}
