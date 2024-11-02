import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// Declaración del componente LoginComponent, que gestiona la lógica de inicio de sesión
@Component({
  selector: 'app-login', // Selector utilizado para incluir este componente en HTML
  templateUrl: './login.component.html', // Ruta del archivo HTML asociado al componente
  styleUrls: ['./login.component.css'] // Ruta del archivo CSS asociado al componente
})
export class LoginComponent {
  // Declaración de propiedades para almacenar las credenciales de inicio de sesión
  userId: string = '';     // ID de usuario ingresado en el formulario de inicio de sesión
  password: string = '';   // Contraseña ingresada en el formulario de inicio de sesión

  // Inyecta los servicios AuthService y Router en el constructor
  constructor(private authService: AuthService, private router: Router) {}

  // Método llamado al enviar el formulario de inicio de sesión
  onLogin() {
    // Llama al método `login` del servicio de autenticación con `userId` y `password`
    const success = this.authService.login(this.userId, this.password);

    // Si la autenticación es exitosa
    if (success) {
      // Obtiene el rol del usuario desde AuthService
      const role = this.authService.getRole();

      // Redirige según el rol del usuario
      if (role === 'admin') {
        this.router.navigate(['/loan-request']); // Si es administrador, redirige a la solicitud de préstamo
      } else if (role === 'client') {
        this.router.navigate(['/loan-history']); // Si es cliente, redirige al historial de préstamos
      }
    } else {
      // Muestra una alerta si la autenticación falla
      alert('ID o contraseña incorrectos');
    }
  }
}
