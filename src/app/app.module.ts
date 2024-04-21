import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Feature modules
import { AdminModule } from './modules/admin/admin.module';
import { AccountModule } from './modules/account/account.module';

// Routing modules
import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { AccountRoutingModule } from './modules/account/account-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    AccountRoutingModule,
    HttpClientModule,
    AdminModule,
    AccountModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
