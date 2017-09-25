import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-home',
  template: `
  <h1>Maharishi University of Management (MUM)</h1>
  <hr>
  <p>formerly Maharishi International University,
  is an American non-profit university located in Fairfield, Iowa. It was founded in 1973
  by Maharishi Mahesh Yogi and features a "consciousness-based education" system that 
  includes the practice of the Transcendental Meditation technique. Its founding 
  principles include the development of the full potential of the individual, fulfilling
  economic aspirations while maximizing proper use of the environment and bringing spiritual 
  fulfillment and happiness to humanity.</p>
  <hr>
  `,
  styles: []
})
export class HomeComponent implements OnInit {


  //constructor(public route : ActivatedRoute) { }

  ngOnInit() {
  }

}
