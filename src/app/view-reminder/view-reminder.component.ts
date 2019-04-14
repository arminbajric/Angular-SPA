import { Component,Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-view-reminder',
  templateUrl: './view-reminder.component.html',
  styleUrls: ['./view-reminder.component.css']
})
export class ViewReminderComponent  implements OnInit {
  @Input() selected:any;
  constructor() { 
 
   
  }

  ngOnInit() {
    
  }
onSelect(mes:any)
{
 

}
}
