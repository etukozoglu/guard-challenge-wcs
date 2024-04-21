import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { IsConnectedGuard } from 'src/app/core/is-connected.guard';

const routes: Routes = [{ path: 'dashboard', component: DashboardPageComponent, canActivate: [IsConnectedGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
