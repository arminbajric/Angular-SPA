import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Injectable()
export class UsernameValidator {

  debouncer: any;

  constructor(public userService: UserService){

  }

  checkUsername(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.userService.validateUsername(control.value).subscribe((response) => {
          if(response.status==201){
            resolve({'usernameValidator': true});
           
          }
          else{
            resolve(null);
          }
        }, (err) => {
          
         
        });

      }, 1000);      

    });
  }

}