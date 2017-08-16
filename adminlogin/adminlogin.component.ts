import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { AngularFireDatabase } from "angularfire2/database";
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private _service: DataService, private db: AngularFireDatabase, public router: Router, public af: AngularFireAuth) {
  }

  ngOnInit() {
  }
  login() {
    if (this.email == "admin@admin.com" || this.password == "admin123") {
      this.router.navigate(['/admin']);
    }
    this.password = "";
    this.email = "";
  }




}
