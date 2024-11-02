import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private baseUrl = 'http://localhost:3000/usuario'; // URL base para la autenticación

  constructor(private router: Router, private http: HttpClient) { }

  // Método login para enviar credenciales al backend y actualizar el estado de autenticación
  login(userId: string, password: string): Observable<boolean> {
    const loginEndpoint = `${this.baseUrl}/login`;

    // Enviamos solo el nombre de usuario y la contraseña
    return this.http.post<{ name: string; userId: string; role: string }>(loginEndpoint, { nombre_usuario: userId, contrasena: password })
      .pipe(
        tap(response => {
          // Almacena los datos recibidos del backend
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('userName', response.name);
          localStorage.setItem('role', response.role);
          this.isAuthenticatedSubject.next(true); // Cambia el estado de autenticación a verdadero
        }),
        map(() => true), // Devuelve `true` si el inicio de sesión es exitoso
        catchError(error => {
          this.isAuthenticatedSubject.next(false); // Cambia el estado de autenticación a falso en caso de error
          throw error;
        })
      );
  }

  // Método logout para cerrar sesión y limpiar la información de autenticación
  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }

  // Método para obtener el rol del usuario actual desde localStorage
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // Método para obtener el nombre del usuario actual desde localStorage
  getUserName(): string | null {
    return localStorage.getItem('userName');
  }
}
