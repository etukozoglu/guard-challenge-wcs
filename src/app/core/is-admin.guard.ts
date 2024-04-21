import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    const role = this.userService.getRole();
    if (role === 'ADMIN') {
      return true;
    }
    this.router.navigate(['/home']); //redirection in case of no access (redirect to account/home)
    return false;
  }
}
