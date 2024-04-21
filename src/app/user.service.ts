import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Restriction de rôle
  private role: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'ANONYMOUS';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`/assets/users.json`);
  }

  getRole(): string {
    return this.role = 'ADMIN';
    // faites le test en changeant     return this.role = 'XXX';
  }

  setRole(role: 'ANONYMOUS' | 'USER' | 'ADMIN'): void {
    this.role = role;
  }

}
