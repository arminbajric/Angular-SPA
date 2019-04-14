import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReminderService implements OnInit {
  reminders: any;
  ngOnInit(): void {

  }

  constructor(private http: HttpClient) { }

  getUserReminders(): Observable<any> {
    return this.http.get(environment.baseApi + '/app/get-user-reminders', { params: new HttpParams().set('token', localStorage.getItem('UserToken')),headers:new HttpHeaders().set('authorization',localStorage.getItem('UserToken')), observe: 'response' }).pipe(map(response => { return response }))
  }
  createNewreminder(form:FormGroup): Observable<any> {
    const data={
      reminderTitle:form.get('title').value,
      doe:form.get('date').value,
      toe:form.get('time').value,
      reminderText:form.get('text').value,
    }
    return this.http.post(environment.baseApi + '/app/create-new-reminder', data, { params: new HttpParams().set('UserToken', localStorage.getItem('UserToken')),headers:new HttpHeaders().set('authorization',localStorage.getItem('UserToken')), observe: 'response' }).pipe(map(response => { return response }))
  }
  deleteReminder(title): Observable<any> {
    return this.http.delete(environment.baseApi + '/app/delete_reminder', { params: new HttpParams().set('UserToken', localStorage.getItem('UserToken')).set('title', title), observe: 'response' }).pipe(map(response => { return response }))
  }
  updateReminder(title, content): Observable<any> {
    return this.http.put(environment.baseApi + '/app/update-reminder', content, { params: new HttpParams().set('UserToken', localStorage.getItem('UserToken')).set('title', title), observe: 'response' }).pipe(map(response => { return response }))
  }
  getUpcoming(): Observable<any>{
    return this.http.get(environment.baseApi+'/app/get-upcoming',{headers:new HttpHeaders().set('authorization',localStorage.getItem('UserToken')),observe:'response'}).pipe(map(response=>{return response}))
  }

}
