import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { IsAdminGuard } from 'src/app/core/is-admin.guard';

const routes: Routes = [{ path: 'list', component: AdminHomeComponent, canActivate: [IsAdminGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
