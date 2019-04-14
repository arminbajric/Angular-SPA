import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {ReminderService } from '../services/reminder.service';


@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css'],

})

export class ReminderListComponent  implements OnInit {
 loaded;
remindersList:Array<any>;
message:any;
  constructor(private reminders:ReminderService) {
  
   }

  ngOnInit() {
    this.loaded=false;
    this.reminders.getUserReminders().subscribe(response=>{
      if(response.status==200)
      {
        this.remindersList=response.body;
        this.message='';
        this.loaded=true;
        
      }
      else{
        this.message='You have no reminders.Create new ones.';
        this.loaded=true;
      }
      
    })
  }
 
  onClickLoadReminder(select: any) {
    
   
   
   
   
    
  }
  
}
