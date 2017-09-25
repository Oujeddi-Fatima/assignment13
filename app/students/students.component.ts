import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-students',
  templateUrl: './student.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  students;
  
  constructor(private dbservice: DbService) {
    this.students = dbservice.getData();
  }
  ngOnInit() {
  }

}
