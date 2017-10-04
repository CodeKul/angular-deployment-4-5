import { Response } from '@angular/http';
import { LgnService } from './lgn.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jsObj = {
    nm: 'Android',
    toipc: 'Json parsing',
    toipcNum: 8,
    isGood: true,
    subTopic: {
      http: 'yes it is',
      weight: 78.56
    },
    topics: [
      'Android',
      'Java',
      'Kotlin',
      'node',
      'cpp'
    ]
  };

  constructor(
    private router: Router,
    private login: LgnService
  ) {
  }

  ngOnInit() {

    this.login.myObs().subscribe(
      function (str) {

      },
      err => { },
      () => { }
    );
  }

  onSubmit(frm: any) {
    console.log(this);
    this.login.login(frm.email, frm.password).subscribe(
      res => {
        if (res['Result'] === 'Success') {
          this.router.navigate(['dash']);
        }
      },
      this.onError,
      this.onComplete
    );
  }

  onError(err) {
    console.log(err);
  }

  onComplete() {
    console.log('on Complete');
  }

  myData() {
    console.log(this);
  }
}
