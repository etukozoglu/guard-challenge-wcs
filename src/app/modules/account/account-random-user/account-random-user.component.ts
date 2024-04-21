import { Component, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-account-random-user',
  templateUrl: './account-random-user.component.html',
  styleUrls: ['./account-random-user.component.scss']
})
export class AccountRandomUserComponent {

  @Input()
  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      if (users.length > 0) {
        this.user = users[Math.floor(Math.random() * users.length)]; // Select a random user
      }
    });
  }
}

