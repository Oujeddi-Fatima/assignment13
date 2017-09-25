import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Router, RouterModule} from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { homeComponent } from './home.cmponent';
import { MyRouters } from './app.routers';
import { ProfileComponent } from './profile.component';
import { ErrorComponent } from './Error.component';

import { DbService } from './db.service';
import { GuardService } from './guard.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    homeComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MyRouters)
  ], 
  providers: [DbService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
