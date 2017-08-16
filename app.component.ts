import { Component } from '@angular/core';
import {StudentComponent} from './student/student.component';
import {CompanyComponent} from './company/company.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public st:StudentComponent){

}
isTrue = true;
}
