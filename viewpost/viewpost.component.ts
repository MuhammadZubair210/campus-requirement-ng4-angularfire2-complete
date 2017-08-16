import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  constructor(public cs: CompanyService, public db: AngularFireDatabase, public afa:AngularFireAuth) {
    this.viewcomp();
   }

  ngOnInit() {
  }
  arr = [];
  
// viewpost;
// show(){
  arry = [];
  keys = [];
  parentKeys = [];
  uid;
  comp: FirebaseListObservable<any[]>;
  viewcomp() {
    this.uid = this.afa.auth.currentUser.uid;
    this.comp = this.db.list('/addposts/'+this.uid, { preserveSnapshot: true });
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
        });
      });
  }
}
