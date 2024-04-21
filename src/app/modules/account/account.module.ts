import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountRandomUserComponent } from './account-random-user/account-random-user.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    AccountRandomUserComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
