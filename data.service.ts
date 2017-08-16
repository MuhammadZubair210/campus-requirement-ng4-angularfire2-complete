import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { RouterModule, Router } from '@angular/router'
@Injectable()
export class DataService {
  check;
  users: FirebaseListObservable<any[]>
  userprofile: FirebaseListObservable<any[]>
  uid;
  constructor(private afa: AngularFireAuth, private db: AngularFireDatabase, public router: Router) {

  }

  
  showuser() {
    this.uid = this.afa.auth.currentUser.uid;
    this.userprofile = this.db.list('/users/' + this.uid, { preserveSnapshot: true });
    this.userprofile
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          if (snapshot.val().type == 'Student') {
            this.router.navigate(['/student']);
          }
          else if (snapshot.val().type == 'Company') {
            this.router.navigate(['/companydashboard']);
          }
          else {
            alert("show correct email or password");
            this.router.navigate(['/signup']);
          }

          console.log(snapshot.key);
          console.log(snapshot.val().type);
        });
      })
  }

  signup(name: string, email: string, password: string, type: string) {
    console.log("successfull");
    console.log(name, email, password, type);
    this.afa.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!');
      })
      .then(value => {
        this.uid = this.afa.auth.currentUser.uid;
        let formdata = { name, email, password, type };
        this.db.list("/users/"+this.uid).push(formdata);                     //changes
      })
      .catch(err => {
        console.log('Something went wrong:');

      })
  }

  login(email, password) {
    this.afa.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log("success", value);
      })
      .then(value => {
        this.showuser();
      })
      .catch(err => {
        console.log("failed", err.message);
      })
  }
}


