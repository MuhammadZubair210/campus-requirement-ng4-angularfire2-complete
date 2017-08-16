import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-companydash',
  templateUrl: './companydash.component.html',
  styleUrls: ['./companydash.component.css']
})
export class CompanydashComponent implements OnInit {

  constructor(public af:AngularFireAuth,public router:Router) { }

  ngOnInit() {
  }

 logout() {
    this.af.auth.signOut();
    this.router.navigate(["/home"]);
  }


}
