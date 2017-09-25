import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
interface Person {
  id: string;
  name: string;
  studId: string;
  email: string;
}
@Injectable()
export class DbService {
  constructor() { }
  db: Person[] = [{ 'id': '1', 'name': 'Asaad Saad', 'studId': '1234', 'email': 'assad@mum.edu' },
  { 'id': '2', 'name': 'Fatima Oujeddi', 'studId': '1234', 'email': 'Oujeddi@mum.edu' },
  { 'id': '3', 'name': 'Yaman Raj Upadhayay ', 'studId': '1234', 'email': 'Yaman@mum.edu' },
  { 'id': '4', 'name': 'Saaida Jallal', 'studId': '1234', 'email': 'Saaida@mum.edu' },
  { 'id': '5', 'name': 'Samira Ben Seiid', 'studId': '1234', 'email': 'Samira@mum.edu' },
  { 'id': '6', 'name': 'Mehdi Ben Atia', 'studId': '1234', 'email': 'Mehdi@mum.edu' },
  { 'id': '7', 'name': 'Chi hed Tani', 'studId': '1234', 'email': 'Tani@mum.edu' }]

  getData() {
    return this.db;
  }
  getstudent(id: number) {
    return this.db[id - 1]
  }

  testStudent(id): boolean {
    return id > 0 && id < this.db.length;
  }

}
