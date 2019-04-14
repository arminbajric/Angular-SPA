import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsernameValidator} from '../validators/username';
import {EmailValidator} from '../validators/email';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpFormGroup: FormGroup;
  submitted: boolean;
  debouncer: any;
  @Input() uniqueUsernameError:any;
  @Input() uniqueEmailError:any;
  constructor(private userService: UserService, private router: Router,private usernameValidator:UsernameValidator,private emailValidator:EmailValidator) { }

  ngOnInit() {
    this.submitted = false;
    this.signUpFormGroup = new FormGroup({
      userData: new FormGroup({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          
        ]),this.emailValidator.checkEmail.bind(this)),
        username: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          
        ]),this.usernameValidator.checkUsername.bind(this)),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),

        ])),
        country: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required)
      }),

    });

  }
  signupSubmit(userForm) {
    const userData = {
      username: this.signUpFormGroup.get('userData').get('username').value,
      email: this.signUpFormGroup.get('userData').get('email').value,
      password: this.signUpFormGroup.get('userData').get('password').value,

    };
    this.submitted = true;
    console.log( this.signUpFormGroup.get('userData').get('email').statusChanges);
    console.log( this.signUpFormGroup.get('userData').get('username').statusChanges);
    console.log(this.signUpFormGroup.errors)
    if (this.signUpFormGroup.valid) {
      this.userService.createUser(userData).subscribe(response => {
        if (response.status = 200) {
          this.router.navigate(['/login']);
        }
      });
    }

  }

}
