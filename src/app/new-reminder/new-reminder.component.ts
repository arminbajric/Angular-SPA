import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminder.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit  {
  createNewGroup:FormGroup;
  submitted:any;
  message;
 constructor(private reminderService:ReminderService){}
  ngOnInit() {
    this.message='';
   this.createNewGroup=new FormGroup({
     title: new FormControl('',Validators.compose([Validators.required,Validators.minLength(10)])),
     date:new FormControl('',Validators.compose([Validators.required])),
     time:new FormControl('' ,Validators.compose([Validators.required])),
     text:new FormControl('',Validators.compose([Validators.required]))
   })
   this.submitted=false;
  }
  
  submitNewReminder(form:FormGroup){
this.submitted=true;
console.log(this.createNewGroup.valid);
if(this.createNewGroup.valid)
{
this.reminderService.createNewreminder(form).subscribe(response=>{
  this.message='Done.';
  this.submitted=false;
})  

}
  }
}
