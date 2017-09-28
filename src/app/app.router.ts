import { DashGuardService } from './dash/dash-guard.service';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash', component: DashComponent }
];

export let MyRouterModule = RouterModule.forRoot(routes);
