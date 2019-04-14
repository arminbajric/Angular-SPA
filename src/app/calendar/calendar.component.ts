import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  month = [];
  presentDay;
  presentMonth;
  presentYear;
  calendar: Promise<any>;
  @Output() exitCalendar = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.calendar = new Promise((resolve) => {

      this.loadScript();
    });
    this.generateMonth(new Date().getDate(), new Date().getDay(), new Date().getMonth() + 1, new Date().getFullYear());
    this.presentDay = new Date().getDate();
    this.presentMonth = new Date().getMonth() + 1;
    this.presentYear = new Date().getFullYear();
  }
  createNew(day, month, year) {

  }
  closeCalendar() {
    console.log('closeee');
    this.exitCalendar.emit(true);

  }
  public loadScript() {

    let node = document.createElement('script');
    node.src = 'assets/scripts/element_float.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

  }
  generateMonth(currentDay, dayInWeek, month, year) {
    let daysInMonth;
    if (month == 2) {
      if (this.leapYear(year)) {
        daysInMonth = 29;
      }
      else {
        daysInMonth = 28;
      }
    }
    else {
      if (month % 2 == 0) {
        daysInMonth = 30;
      }
      else {
        daysInMonth = 31;
      }
    }
    console.log('generating')
    if (currentDay > 6) {
      do {
        currentDay -= 7;

      } while (currentDay > 6);
      if (currentDay < dayInWeek) {
        console.log(currentDay)
        console.log('currentDay < dayInWeek')
        let start = dayInWeek - currentDay;
        for (let i = 1; i <= daysInMonth; i++) {
          this.month[start] = i;
          start++;
        }
      }
      else if (currentDay > dayInWeek) {
        console.log(currentDay)
        console.log(dayInWeek)
        console.log('currentDay > dayInWeek')
        let start = currentDay - dayInWeek;
        for (let i = 1; i <= daysInMonth; i++) {
          this.month[start] = i;
          start++;
        }
      }
      else if (currentDay == dayInWeek) {
        console.log('currentDay == dayInWeek')
        for (let i = 1; i <= daysInMonth; i++) {
          this.month[i - 1] = i;
        }

      }

    }
    else if (currentDay <= 7) {
      if (currentDay == dayInWeek) {
        for (let i = 1; i <= daysInMonth; i++) {
          this.month[i - 1] = i;
        }

      }
      else if (currentDay < dayInWeek) {
        let start = dayInWeek - currentDay;
        for (let i = 1; i <= daysInMonth; i++) {
          this.month[start] = i;
          start++;
        }
      }
      else if (currentDay > dayInWeek) {
        let start = currentDay - dayInWeek;
        for (let i = 1; i <= daysInMonth; i++) {
          this.month[start] = i;
          start++;
        }
      }
    }
  }
  leapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
      return true;
    }
    else {
      return false;
    }
  }
}
