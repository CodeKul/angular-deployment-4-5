import { Card } from './card';
import { LgnService } from './../login/lgn.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(
    private login: LgnService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onLogout() {

  }

  onPay(frm: NgForm) {
    console.log(frm);

    let card: Card = new Card();
    card.cardNm = frm['cardNm'];
    card.cardNum = frm['cardNum'];
    card.cvv = frm['cvv'];
    card.password = frm['password'];

    this.login.pay(card).subscribe(res => console.log(res));
  }
}
