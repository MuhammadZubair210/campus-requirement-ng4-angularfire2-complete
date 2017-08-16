import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CompanyComponent } from './company/company.component';

@Injectable()
export class StudentService {

  form: FormGroup;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any>;
  studentdetails;
  uid;
  // itemss: FirebaseListObservable<any[]>;

  constructor(public af: AngularFireAuth, public afd: AngularFireDatabase, public router: Router, public fb: FormBuilder) {
    this.createform();
    this.items = this.afd.list('/student', {
      // query: {
      //   limitToLast: 50,
      //   orderByKey: true
      // }
    });
    this.user = this.af.authState;
  }
  // company=this.cp.details;

  ngOnInit() { }

  createform() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      cgpa: ['', Validators.required],
      qualification: ['', Validators.required],
      program: ['', Validators.required],
      contact: ['', Validators.required],


    });
  }

  signout() {
    this.af.auth.signOut();
    this.router.navigate(["/signup"]);
  }


  submit(user) {
    this.uid = this.af.auth.currentUser.uid;
    this.afd.object('/student/' + this.uid).update(user);
    console.log(user);
    this.form.reset();
  }

  // update(user) {
  //   const items = this.afd.list('/student');
  //   items.set(this.uid, { user });
  // }

  //    get demo(): any{
  //       this.show();
  //       return this.array;
  //     }
  // array;
  //   // this.uid = this.af.auth.currentUser.uid;
  //   show() {
  //     this.items = this.afd.list('/student', { preserveSnapshot: true });
  //     this.items.subscribe(snapshot => {
  //       this.array = [];
  //       console.log(snapshot.key)
  //       console.log(snapshot.val())
  //       this.array.push(snapshot.val());
  //     })
  //   }

}