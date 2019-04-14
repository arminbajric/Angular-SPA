import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

declare function require(path: string);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  barTitle = 'Areminder';
  optionSelect = 'Select redminder';
  createT = 'Create Reminder';
  imageSrcCompInfo = require('../assets/images/images.jpg');
  constructor(private userService:UserService,private router:Router){}
  footer = true;
  public loadReminders = false;
  public create = false;
  public calledReminder = false
  reminder: Array<any>;
 

  createNew() {
    this.create = true;
    this.loadReminders = false;
    this.calledReminder = false;
  }
  onLoad(mes: number): void {





    this.create = false;
    this.calledReminder = true;
  }
  ngOnInit() {
    AOS.init();
    if (localStorage.getItem('UserToken') != null && localStorage.getItem('UserToken') != undefined) {

      let user: any;
      this.userService.decodeJwt().subscribe(response => {
        if(response.status==200)
      {  this.router.navigate(['app', response.body[0]]);}
      else{
        this.router.navigate(['login']);
      }
      }
      )

    }
  }
 
}
