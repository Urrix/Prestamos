import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombreUsuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    // Llama al método `login` del servicio de autenticación y se suscribe al resultado
    this.authService.login(this.nombreUsuario, this.password).subscribe(
      success => {
        if (success) {
          const role = this.authService.getRole();
          if (role === 'admin') {
            this.router.navigate(['/loan-request']); // Redirige a la página de solicitud de préstamo para admin
          } else if (role === 'client') {
            this.router.navigate(['/loan-history']); // Redirige a la página de historial de préstamos para cliente
          }
        }
      },
      error => {
        // Muestra una alerta en caso de error de autenticación
        alert('ID o contraseña incorrectos');
      }
    );
  }
}
