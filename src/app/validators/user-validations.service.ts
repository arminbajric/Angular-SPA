import { Injectable } from '@angular/core';
import {UserService} from '../services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserValidationsService {

  constructor(private userService:UserService) { }

  validateUsername(username):Observable<any>{
   return this.userService.validateUsername(username).pipe(map(response=>{return response}))
  }
  validateEmail(email):Observable<any>{
    return this.userService.validateUsername(email).pipe(map(response=>{return response}))
   }
}
