import { DashGuardService } from './dash/dash-guard.service';
import { LgnService } from './login/lgn.service';
import { MyRouterModule } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { DashComponent } from './dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MyRouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [LgnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
