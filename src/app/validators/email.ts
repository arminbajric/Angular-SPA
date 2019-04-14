import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Injectable()
export class EmailValidator {

  debouncer: any;

  constructor(public userService: UserService){

  }

  checkEmail(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.userService.validateEmail(control.value).subscribe((response) => {
          if(response.status==201){
            resolve({'emailValidator': true});
           
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