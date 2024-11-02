// Importaciones necesarias de Angular y del servicio de autenticación.
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

// Decorador que define el componente `NavbarComponent`.
// `selector` define el nombre del elemento HTML para el componente.
// `templateUrl` especifica la ubicación del archivo HTML que representa la plantilla de este componente.
// `styleUrls` es un array con la ruta del archivo CSS que contiene los estilos específicos del componente.
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// Definición de la clase del componente `NavbarComponent`, que implementa la interfaz `OnInit`.
export class NavbarComponent implements OnInit {
  // Propiedad que indica si el usuario está autenticado o no.
  // Se inicializa en `false` por defecto.
  isAuthenticated: boolean = false;

  // Propiedad para almacenar el rol del usuario actual. Puede ser `null` si no hay usuario autenticado.
  userRole: string | null = null;

  // Propiedad para almacenar el nombre del usuario actual. Puede ser `null` si no hay usuario autenticado.
  userName: string | null = null;

  // Constructor de la clase que inyecta el servicio de autenticación `AuthService`.
  // Este servicio se usa para obtener el estado de autenticación y detalles del usuario.
  constructor(private authService: AuthService) {}

  // Método del ciclo de vida `ngOnInit` de Angular, que se ejecuta una vez que el componente se ha inicializado.
  ngOnInit(): void {
    // Suscripción al observable `isAuthenticated$` del servicio de autenticación.
    // Este observable emite `true` o `false` dependiendo de si el usuario está autenticado.
    this.authService.isAuthenticated$.subscribe(isAuth => {
      // Actualiza la propiedad `isAuthenticated` con el valor emitido.
      this.isAuthenticated = isAuth;

      // Si el usuario está autenticado, se obtienen el rol y el nombre del usuario desde el servicio de autenticación.
      this.userRole = this.authService.getRole();
      this.userName = this.authService.getUserName();
    });
  }

  // Método para cerrar sesión del usuario.
  // Este método llama al método `logout` del servicio de autenticación,
  // el cual gestiona la lógica de cierre de sesión.
  logout() {
    this.authService.logout();
  }
}
