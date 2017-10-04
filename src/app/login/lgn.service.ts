import { Card } from './../dash/card';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LgnService {
  constructor(
    private http: Http
  ) {
  }

  login(eml, pass): Observable<Response> {
    // let hdrs = {
    //   headers: new Headers({
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   })
    // };
    return this.http.get(
      `http://192.168.0.103:8080/checkiftrue?email=${eml}&pass=${pass}`
    ).map(data => data.json());
  }

  pay(card: Card): Observable<Response> {
    let body: any = {
      card_number: card.cardNum,
      cvv: card.cvv,
      password: card.password,
      card_name: card.cardNm
    };

    return this.http.post(
      'http://192.168.0.103:8080/savepaymentdata',
      body
    );
  }

  myObs(): Observable<string> {
    return Observable.create(
      sub => {
        for (let i = 0; i < 1000; i++) {
          sub.next(`${i}`);
          if (i < 0) {
            sub.error(new Error());
          }
        }
        sub.complete();
      }
    );
  }
}
