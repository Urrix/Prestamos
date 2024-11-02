import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {}

  private users = [
    { userId: 'admin123', password: 'adminpass', name: 'Admin User', role: 'admin' },
    { userId: 'client123', password: 'clientpass', name: 'Client User', role: 'client' }
  ];

  login(userId: string, password: string): boolean {
    const user = this.users.find(u => u.userId === userId && u.password === password);

    if (user) {
      localStorage.setItem('role', user.role);
      localStorage.setItem('userId', user.userId);
      localStorage.setItem('userName', user.name); // Guardar el nombre del usuario
      this.isAuthenticatedSubject.next(true);
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }
}
