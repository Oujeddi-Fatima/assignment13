import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from './db.service';


@Injectable()
export class GuardService implements CanActivate {
  studentId;
  constructor(private router: Router,private dbservice: DbService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    if (this.dbservice.testStudent(route.pathFromRoot[2].url.toString())) {
      return true
    }
    else {
      this.router.navigate(['error']);
    }
  }

}
