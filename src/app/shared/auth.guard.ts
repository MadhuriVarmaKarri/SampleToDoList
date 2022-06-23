import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true
      // this.router.navigate(['dashboard/add-student'])
    } else {
      alert(" You are not Admin");
      return false
    }

  }

}
