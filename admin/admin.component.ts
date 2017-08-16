import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from "../data.service";
import { StudentService } from "../student.service";
import { CompanyService } from "../company.service";
import { CompanyComponent } from "../company/company.component";

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  students: FirebaseListObservable<any[]>;
  uid;
  del;
  name;
  email;
  password;
  type;
  itemss: FirebaseListObservable<any[]>;
  compdetails: FirebaseListObservable<any[]>;
  constructor(public ccom: CompanyComponent, public _service: DataService, private db: AngularFireDatabase, private router: Router, public af: AngularFireAuth, public st: StudentService, public cc: CompanyService) {
    this.students = this.st.items;
    // this.compdetails = this.ccom.cdetaillist;

    this.viewcomp();
    this.viewstudent();
    this.viewuser();
  }
  ngOnInit() {
  }
  // studentDetail = { gpa: "", name: "", phone: "", program: "" };

  // showDetail(i) {
  //   this.studentDetail = this.students[i];
  // }






  // company = this.cc.demoo;


  arry = [];
  keys = [];
  parentKeys = [];
  comp: FirebaseObjectObservable<any[]>;
  viewcomp() {
    this.comp = this.db.object('/compdetails', { preserveSnapshot: true });
    this.comp

      .subscribe(snapshots => {
        this.arry = [];
        this.keys = [];
        this.parentKeys = [];
        snapshots.forEach(snapshot => {

          this.parentKeys.push(snapshot.key)
          this.keys.push(snapshot.val());
          // snapshot.forEach(child => {
          // console.log(child.key)
          // console.log(child.val())
          // this.keys.push(child.key);
          // this.arry.push(child.val())
          // console.log(this.arry);
        })
      });
  }


  arrystudent = [];
  keysstudent = [];
  parentKeysstudent = [];
  stu: FirebaseObjectObservable<any>;
  viewstudent() {
    // this.uid = this.af.auth.currentUser.uid;
    this.stu = this.db.object('/student', { preserveSnapshot: true });
    this.stu

      .subscribe(snapshots => {
        this.arrystudent = [];
        this.keysstudent = [];
        this.parentKeysstudent = [];
        snapshots.forEach(snapshot => {
          this.keysstudent.push(snapshot.key);
          this.arrystudent.push(snapshot.val())
          console.log(this.arrystudent)
          // // snapshot.forEach(child => {
          //   console.log(child.key)
          //   console.log(child.val())
          // this.keysstudent.push(child.key);
          // this.arrystudent.push(child.val())
          // console.log(this.arrystudent);
        })


      });

  }



  arryuser = [];
  keysuser = [];
  parentKeysuser = [];
  user: FirebaseListObservable<any[]>;
  viewuser() {
    // this.uid = this.af.auth.currentUser.uid;
    this.user = this.db.list('/users', { preserveSnapshot: true });
    this.user

      .subscribe(snapshots => {
        this.arryuser = [];
        this.keysuser = [];
        this.parentKeysuser = [];
        snapshots.forEach(snapshot => {
          this.parentKeysuser.push(snapshot.key)
          snapshot.forEach(child => {
            console.log(child.key)
            console.log(child.val())
            this.keysuser.push(child.key);
            this.arryuser.push(child.val())
            console.log(this.arryuser);
          })


        });
      })
  }





  // test(){
  // console.log(this.company);
  // }
  // students = this.st.items;
  // users = this._service.users;
  // ar = [];
  userprofile: FirebaseListObservable<any[]>;
  studentprofile: FirebaseListObservable<any[]>;
  compprofile: FirebaseListObservable<any[]>;
  userposts: FirebaseListObservable<any[]>;

  studentnum = [];
  allCompanyKey = [];
  idd;

  deleteValue(i) {
    console.log(this.parentKeysstudent[i])
    for (var a = 0; a < this.parentKeysuser.length; a++) {
      if (this.parentKeysuser[a] === this.keysstudent[i]) {
        console.log(this.parentKeysuser[a]);
        this.idd = this.parentKeysuser[a];
      }
    }
    console.log(this.idd)
    this.studentprofile = this.db.list("/student/", { preserveSnapshot: true })
    this.studentprofile.remove(this.keysstudent[i]).then(_ => console.log('deleted!'));
    this.userprofile = this.db.list("/users/", { preserveSnapshot: true })
    this.userprofile.remove(this.idd).then(_ => console.log('deleted!'));
    console.log(i);
    console.log(this.keysstudent[i]);
    console.log(this.parentKeysstudent[i]);
  }

  id;
  deleteValue1(i) {
    console.log(this.parentKeys[i])
    for (var a = 0; a < this.parentKeysuser.length; a++) {
      if (this.parentKeysuser[a] == this.parentKeys[i]) {
        console.log(this.parentKeysuser[a]);
        this.id = this.parentKeysuser[a];
      }

    }

    this.compprofile = this.db.list("/compdetails/", { preserveSnapshot: true })
    this.compprofile.remove(this.parentKeys[i]).then(_ => console.log('deleted!'));
    this.userprofile = this.db.list("/users/", { preserveSnapshot: true })
    this.userprofile.remove(this.id).then(_ => console.log('deleted!'));
    console.log(i);
    console.log(this.keys[i]);
    console.log(this.parentKeys[i]);
  }
  logout() {
    this.af.auth.signOut();
    this.router.navigate(["/home"]);
  }
}
