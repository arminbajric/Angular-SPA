import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment.prod'
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }
  createUser(userData):Observable<any>{
   
    return this.http.post(environment.baseApi+'/signup',userData,{observe:'response'}).pipe(map(response=>{return response}))
  }
  checkUser(userData):Observable<any>{
    const user={
      email:userData.get('userData').get('email').value,
      password:userData.get('userData').get('password').value
    }
    console.log(user.email);
    return this.http.get(environment.baseApi+'/login',{params:new HttpParams().set('email',user.email).set('password',user.password),observe:'response'}).pipe(map(response=>{return response}))
  }
  deleteUser(userData):Observable<any>{
    return this.http.delete(environment.baseApi+'/delete-user',{headers:new HttpHeaders().set('UserToken',localStorage.getItem('UserToken')) ,params: new HttpParams().set('email', userData.email),observe:'response'}).pipe(map(response=>{return response}))
  }
  decodeJwt():Observable<any>
  {
    const jwt=localStorage.getItem('UserToken');
    console.log(jwt)
    return this.http.get(environment.baseApi+'/decode-jwt',{params:new HttpParams().set('token',jwt),observe:'response'}).pipe(map(response=>{return response}));
  }
  validateUsername(username):Observable<any>
  {
    return this.http.get(environment.baseApi+'/check-username',{params:new HttpParams().set('username',username),observe:'response'}).pipe(map(response=>{return response}))
  }
  validateEmail(email):Observable<any>
  {
    return this.http.get(environment.baseApi+'/check-email',{params:new HttpParams().set('email',email),observe:'response'}).pipe(map(response=>{return response}))
  }
}
