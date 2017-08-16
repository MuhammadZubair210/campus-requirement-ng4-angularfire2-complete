import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  constructor(public cs:CompanyService) { }

  ngOnInit() {
  }
   posts;
   describe;

  post(){
    this.cs.addPost(this.posts,this.describe)
    this.posts = "";
    this.describe = "";
  }

}
