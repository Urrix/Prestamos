import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string | null>(null);
  private avatar = new BehaviorSubject<string | null>(null);  // Para la imagen del avatar

  constructor(private router: Router) {}

  // Método de inicio de sesión con credenciales fijas para admin y cliente
  login(role: 'admin' | 'client', password: string) {
    if ((role === 'admin' && password === 'admin123') ||
        (role === 'client' && password === 'client123')) {
      this.isAuthenticated.next(true);
      this.username.next(role === 'admin' ? 'Admin' : 'Cliente');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciales inválidas');
    }
  }

  // Método para cerrar sesión
  logout() {
    this.isAuthenticated.next(false);
    this.username.next(null);
    this.avatar.next(null);  // Restablece el avatar al cerrar sesión
    this.router.navigate(['/login']);
  }

  // Método para obtener el estado de autenticación
  isLoggedIn$() {
    return this.isAuthenticated.asObservable();
  }

  // Método para obtener el nombre de usuario como observable
  getUsername$() {
    return this.username.asObservable();
  }

  // Método para obtener el avatar como observable
  getAvatar$() {
    return this.avatar.asObservable();
  }

  // Método para actualizar el avatar del usuario
  updateUserAvatar(avatarUrl: string) {
    this.avatar.next(avatarUrl);
  }
}
