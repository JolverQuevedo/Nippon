import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private snackBar: MatSnackBar, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('usuario') !== null) {
      this.snackBar.open('Bienvenido');
      return true;
    }
    this.snackBar.open('Necesitas loguearte para ingresar');
    this.router.navigate(['/']);
    return false;
  }
}
