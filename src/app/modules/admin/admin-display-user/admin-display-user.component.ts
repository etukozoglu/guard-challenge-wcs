import { Component, Input } from '@angular/core';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-admin-display-user',
  templateUrl: './admin-display-user.component.html',
  styleUrls: ['./admin-display-user.component.scss']
})
export class AdminDisplayUserComponent {

  @Input()
  user!: User;

}
