import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ReminderService } from '../services/reminder.service';
import { NewReminderComponent } from '../new-reminder/new-reminder.component';
import { ReminderListComponent } from '../reminder-list/reminder-list.component';
import { ReminderBodyComponent } from '../reminder-body/reminder-body.component';
import { UpcomingComponent } from '../upcoming/upcoming.component';

import * as AOS from 'aos';
@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css']
})
export class AppBoardComponent implements OnInit,AfterViewInit {
 
  @ViewChild('mainContent', {read: ViewContainerRef}) mainBlock: ViewContainerRef;
  @ViewChild('sideContent', {read:ViewContainerRef}) sideBlock:ViewContainerRef;
  state:any
  remindersList:any;
  mainTitle;
  sideTitle;
  loaded;
  constructor(private componentFactory:ComponentFactoryResolver, private activatedRoute:ActivatedRoute,private router:Router,private reminderService:ReminderService) { }

  ngOnInit() {
AOS.init();
this.mainTitle='User reminders';
this.sideTitle='Upcoming reminder';
this.loaded=false;
    if(localStorage.getItem('UserToken')!=null&&localStorage.getItem('UserToken')!='undefined')
    {
     this.state= this.activatedRoute.snapshot.paramMap.get('user');
     this.reminderService.getUserReminders().subscribe(response=>{
       this.remindersList=response.body;
       this.loaded=true;
     })
    }
    else{
    this.router.navigate(['']);
    }
    this.mainBlock.clear();
  const factory=this.componentFactory.resolveComponentFactory(ReminderListComponent)
  this.mainBlock.createComponent(factory);
  this.sideBlock.clear();
  const side=this.componentFactory.resolveComponentFactory(UpcomingComponent);
this.sideBlock.createComponent(side);
  }
  ngAfterViewInit(): void {
   
  }
logOut(){
  localStorage.removeItem('UserToken')
this.router.navigate(['']);
}
createNew(){
  this.mainBlock.clear();
  const factory=this.componentFactory.resolveComponentFactory(NewReminderComponent);
  this.mainBlock.createComponent(factory);
  this.mainTitle='Create new reminder';
}
showUserReminders(){
  this.mainBlock.clear();
  const factory=this.componentFactory.resolveComponentFactory(ReminderListComponent)
  this.mainBlock.createComponent(factory);
  
}
}
