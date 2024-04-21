import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDisplayUserComponent } from './admin-display-user/admin-display-user.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDisplayUserComponent,
    AdminUserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
