import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-reminder-body',
  templateUrl: './reminder-body.component.html',
  styleUrls: ['./reminder-body.component.css']
})
export class ReminderBodyComponent     {

@Input() adds:Array<number>;
  constructor()
  {
   
  }
  

delete(head:any){
  
 console.log(head.id);

}
 

}
