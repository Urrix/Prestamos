import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const success = this.authService.login(this.userId, this.password);

    if (success) {
      const role = this.authService.getRole();
      if (role === 'admin') {
        this.router.navigate(['/loan-request']); // Redirige al administrador
      } else if (role === 'client') {
        this.router.navigate(['/loan-history']); // Redirige al cliente
      }
    } else {
      alert('ID o contraseña incorrectos');
    }
  }
}
