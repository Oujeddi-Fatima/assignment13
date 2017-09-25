import { HomeComponent } from './home/home.component'
import { StudentsComponent } from './students/students.component'
import { ProfileComponent } from './profile.component';
import { ErrorComponent } from './Error.component';

import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './guard.service';


export const MyRouters: Routes = [
    { path: 'homepage', component: HomeComponent},
    { path: 'students', component: StudentsComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'students/profile', children: [{ path: '**', component: ProfileComponent , canActivate : [GuardService]}] }
]


