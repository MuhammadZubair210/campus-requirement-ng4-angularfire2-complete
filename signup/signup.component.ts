import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'Rxjs';
// import * as firebase from 'firebase';
import { DataService } from '../data.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // form:FormGroup;
  password;
  email;
  type;
  name;
  users: FirebaseObjectObservable<any[]>;
  list: FirebaseListObservable<any[]>;
  constructor(private _service: DataService, private db: AngularFireDatabase) {

  }

  ngOnInit() {
  }
  signup() {
    this._service.signup(this.name, this.email, this.password, this.type);
    this.name = "";
    this.email = "";
    this.password = "";
    this.type = "";
  }
}

