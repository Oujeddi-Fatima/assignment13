import { Component } from '@angular/core';

@Component({
    selector: 'app-homee',
    template: `
    <hr>
   
    <a [routerLink]="['homepage']">Homepage</a> |
    <a [routerLink]="['students']">Students</a>
    <hr>
    `

})
export class homeComponent {
    
    
}

