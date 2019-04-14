import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private reminders:ReminderService) { }
message:any;
reminder:any;
loaded;
  ngOnInit() {
    this.loaded=false;
    this.reminders.getUpcoming().subscribe(response=>{
       if(response.status==201){
         this.message='You don\'t have upcoming reminders';
         this.loaded=true;
       }
       else{
         this.message='';
         this.reminder=response.body;
         this.loaded=true;
       }
      
    })
  }

}
