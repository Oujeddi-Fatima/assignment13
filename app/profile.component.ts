import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from './db.service';

@Component({
  selector: 'app-profile',
  template: `
  
      <h2>Profile of : {{student.name}} , Id : {{student.id}}</h2>
      Name : {{student.name}} <br>
      Student Id : {{student.studId}}<br>
      Student email : {{student.email}}
    
  `,
  styles: []
})
export class ProfileComponent {
  studentId;
  student;

  constructor(public route: ActivatedRoute, private dbservice: DbService) {
    this.route.pathFromRoot[2].url.subscribe(value => this.studentId = value.toString())
    this.student = this.dbservice.getstudent(this.studentId);
  }



} 