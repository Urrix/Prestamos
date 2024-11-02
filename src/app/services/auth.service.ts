import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

// Decorador @Injectable indica que esta clase puede ser inyectada como un servicio en toda la aplicación
@Injectable({
  providedIn: 'root' // Proporciona este servicio en el nivel raíz de la aplicación
})
export class AuthService {
  // BehaviorSubject para rastrear el estado de autenticación
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Observable que expone el estado de autenticación

  // Constructor inyecta el servicio Router para la navegación
  constructor(private router: Router) {}

  // Lista de usuarios simulada para verificar las credenciales en el inicio de sesión
  private users = [
    { userId: 'admin123', password: 'adminpass', name: 'Admin User', role: 'admin' },
    { userId: 'client123', password: 'clientpass', name: 'Client User', role: 'client' }
  ];

  // Método login para validar credenciales y gestionar el estado de autenticación
  login(userId: string, password: string): boolean {
    // Busca el usuario en la lista local de usuarios simulados
    const user = this.users.find(u => u.userId === userId && u.password === password);

    // Si las credenciales coinciden
    if (user) {
      // Almacena los datos en localStorage para persistencia
      localStorage.setItem('role', user.role);      // Almacena el rol del usuario
      localStorage.setItem('userId', user.userId);   // Almacena el ID del usuario
      localStorage.setItem('userName', user.name);   // Almacena el nombre del usuario
      this.isAuthenticatedSubject.next(true);        // Cambia el estado de autenticación a verdadero
      return true; // Retorna true indicando que el inicio de sesión fue exitoso
    }

    return false; // Retorna false si las credenciales no coinciden
  }

  // Método logout para cerrar sesión y limpiar la información de autenticación
  logout() {
    // Elimina los datos del usuario en localStorage
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.isAuthenticatedSubject.next(false); // Cambia el estado de autenticación a falso
    this.router.navigate(['/login']);        // Redirige a la página de inicio de sesión
  }

  // Método getRole para obtener el rol del usuario actual desde localStorage
  getRole(): string | null {
    return localStorage.getItem('role'); // Devuelve el rol almacenado
  }

  // Método getUserName para obtener el nombre del usuario actual desde localStorage
  getUserName(): string | null {
    return localStorage.getItem('userName'); // Devuelve el nombre del usuario almacenado
  }
}
