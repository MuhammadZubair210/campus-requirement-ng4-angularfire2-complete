import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CompanyComponent } from '../company/company.component';
import { StudentService } from "../student.service";
import { CompanyService } from "../company.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  name;
  // uid = this.af.auth.currentUser.uid;
  applay;
  constructor(public af: AngularFireAuth, public afd: AngularFireDatabase, private fb: FormBuilder, public router: Router, public sservice: StudentService, public cc: CompanyService) {
    this.viewcomp();
   }
  // company = this.cc.offer;
  fm = this.sservice.form;
  // this.
  ngOnInit() {

  }

 arry = [];
  keys = [];
  parentKeys = [];
  comp: FirebaseListObservable<any[]>;
  viewcomp() {
    this.comp = this.afd.list('/addposts', { preserveSnapshot: true });
    this.comp
      .subscribe(snapshots => {
        this.arry = [];
        this.keys = [];
        this.parentKeys = [];
        snapshots.forEach(snapshot => {
          this.parentKeys.push(snapshot.key)
          snapshot.forEach(child => {
            console.log(child.key)
            console.log(child.val())
            this.keys.push(child.key);
            this.arry.push(child.val())
            console.log(this.arry);
          })
        });
      })
  }



  apply() {
    // this.applay = this.afd.list("/apply").push(this.sservice.name)
    console.log(this.sservice.uid.name);
  }

  submit(user) {
    this.sservice.submit(user);
  }
  
  logout() {
    this.af.auth.signOut();
    this.router.navigate(["/home"]);
  }







}








    // this.form = new FormGroup({
    //   name: new FormControl("", Validators.required),
    //   qualification: new FormControl("", Validators.required),
    //   cgpa: new FormControl("", Validators.required),
    //   program: new FormControl("", Validators.required),
    //   contact: new FormControl("", Validators.required)
    // })


  // signout() {
  //   this.af.auth.signOut();
  //   this.router.navigate(["/signup"]);
  // }

  // submit(user) {
  //   this.afd.list('/student/').push(user);
  //   console.log(user)
  // }













// createform() {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     qualification: ['', Validators.required],
  //     cgpa: ['', Validators.required],
  //     program: ['', Validators.required],
  //     contact: ['', Validators.required],

  //   })
  // }







  //  companydetails=this.cp.submitCD(this);




  // const { name, qualification, cgpa, program, contact } = this.form.value;
  // if (this.form.value != "") {
  //   let formdata = { name, qualification, cgpa, program, contact };
  //   this.uid = this.af.auth.currentUser.uid;
  //   this.afd.list('/student/' + this.uid).push(formdata);
  //   console.log(name, qualification, cgpa, program, contact)
  // }
  // else {
  //   console.log("fill");
  // }
  //   this.uid = this.af.auth.currentUser.uid;

  // submit() {
  //   console.log("successfull");

  //   this.uid = this.af.auth.currentUser.uid;
  //   let formdata = { name: "", qualification: "", cgpa: "", program: "", contact: "" };
  //   this.afd.list("/students/" + this.uid).push(formdata);
  // }