import { LgnService } from './../login/lgn.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashGuardService implements CanActivate {

  constructor(
    private lgnSer: LgnService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((res, rej) => {
      // this.lgnSer.oauthObserver(userEml => {
      //   if (userEml) {
      //     res(true);
      //   }else {
      //     res(false);
      //     this.router.navigate(['']);
      //   }
      // });
    });
  }
}
