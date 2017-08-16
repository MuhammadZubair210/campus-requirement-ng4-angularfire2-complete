import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-logincompany',
  templateUrl: './logincompany.component.html',
  styleUrls: ['./logincompany.component.css']
})
export class LogincompanyComponent implements OnInit {
  company: FirebaseListObservable<any[]>;
  email;
  password;
  constructor(private _service: DataService, private db: AngularFireDatabase) {
  }


  ngOnInit() {
  }
  login() {
    this._service.login(this.email, this.password);
    console.log(this.email,this.password)
    this.password = "";
    this.email = "";
  }
}
