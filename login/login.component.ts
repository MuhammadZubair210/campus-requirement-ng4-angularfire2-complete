import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  email;
  password;
  constructor(private _service: DataService, private db: AngularFireDatabase) {
    this.users=db.list("/studentdata",{
    });
  }

  ngOnInit() {
  }

  login() {

    this._service.login(this.email, this.password);
    this.password = "";
    this.email = "";
  }
}
