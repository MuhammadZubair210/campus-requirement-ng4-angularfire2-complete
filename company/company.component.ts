import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from "../data.service";
import { StudentService } from "../student.service";
import { CompanyService } from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  // companydetails:FirebaseListObservable<any[]>
  // constructor(private db: AngularFireDatabase, private router: Router, public af: AngularFireAuth, public st: StudentService, public cservice: CompanyService) {
  form: FormGroup;
  cdetails: FirebaseObjectObservable<any[]>;
  cdetaillist: FirebaseObjectObservable<any>;
  uid;
  jobs: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router, public af: AngularFireAuth, public st: StudentService) {
    this.cdetails = db.object("/compdetails")
  }
  student = this.st.items;

  ngOnInit() {
    this.form = new FormGroup({
      companyname: new FormControl("", Validators.required),
      mainservices: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      contact: new FormControl("", Validators.required),
    })
  }

  submitCD() {
    this.uid = this.af.auth.currentUser.uid;
    this.db.object("/compdetails/" + this.uid).update(this.form.value);
    console.log(this.form.value);
    this.form.reset();
  }

  logout() {
    this.af.auth.signOut();
    this.router.navigate(["/home"]);
  }
}


