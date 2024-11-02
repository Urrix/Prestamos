import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = localStorage.getItem('role'); // Obtiene el rol del usuario del localStorage
    const requiredRole = route.data['role'];

    if (role === requiredRole) {
      return true;
    } else {
      this.router.navigate(['/']); // Redirige al inicio si el rol no es correcto
      return false;
    }
  }
}
