import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DataService } from './data.service';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { CompanyComponent } from './company/company.component';
import { LogincompanyComponent } from './logincompany/logincompany.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { StudentService } from "./student.service";
import { CompanyService } from "./company.service";
import { AddpostComponent } from './addpost/addpost.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { CompanydashComponent } from './companydash/companydash.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'studentlogin', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'companylogin', component: LogincompanyComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'addpost', component: AddpostComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'addpost', component: AddpostComponent },
  { path: 'viewpost', component: ViewpostComponent },
  { path: 'companydashboard', component: CompanydashComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }


];

export const config = {
  // apiKey: "AIzaSyAIelfouKdlPtamjrHbXQDGEHXzmit5UJo",
  // authDomain: "zubair-3e1fd.firebaseapp.com",
  // databaseURL: "https://zubair-3e1fd.firebaseio.com",
  // projectId: "zubair-3e1fd",
  // storageBucket: "zubair-3e1fd.appspot.com",
  // messagingSenderId: "469580536616"

  // apiKey: "AIzaSyDyyzGHkMmMYMDBJOIs5DkPiZxNLXy09QE",
  // authDomain: "angularfire-6ea76.firebaseapp.com",
  // databaseURL: "https://angularfire-6ea76.firebaseio.com",
  // projectId: "angularfire-6ea76",
  // storageBucket: "angularfire-6ea76.appspot.com",
  // messagingSenderId: "250915736379"

  // apiKey: "AIzaSyBC_Vee630D3QDCiluX4VB-AUCtViL1Hu8",
  // authDomain: "login-446d6.firebaseapp.com",
  // databaseURL: "https://login-446d6.firebaseio.com",
  // projectId: "login-446d6",
  // storageBucket: "login-446d6.appspot.com",
  // messagingSenderId: "1013740607042"

  apiKey: "AIzaSyA-eQQJlKpue5n2mx1Tyd9Nkbc2XJsScGw",
  authDomain: "javascript-238d4.firebaseapp.com",
  databaseURL: "https://javascript-238d4.firebaseio.com",
  projectId: "javascript-238d4",
  storageBucket: "javascript-238d4.appspot.com",
  messagingSenderId: "166712179702"
};
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StudentComponent,
    CompanyComponent,
    LogincompanyComponent,
    AddpostComponent,
    AdminComponent,
    AdminloginComponent,
    ViewpostComponent,
    CompanydashComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(routes, { useHash: true }),
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkTableModule,
  ],

  providers: [DataService, StudentService, StudentComponent, CompanyComponent, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
