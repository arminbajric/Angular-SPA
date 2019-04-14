import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroupForm: FormGroup;
  userFound: boolean;
  submitted: any;
  load: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userFound = true;
    this.load = false;
    this.submitted = false;
    this.loginGroupForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])),
      })
    })
   


    
  }
  onFormSubmit(form) {
    this.submitted = true;
    this.userFound=true;
    this.load = true;
    if (this.loginGroupForm.valid) {
      this.userService.checkUser(form).subscribe(response => {
        if (response.status===200) {
          console.log(response.body)
          
          localStorage.setItem('UserToken', response.headers.get('UserToken'))
          this.router.navigate(['app', response.body.username])
        }
        else {
          this.userFound = false;
          this.load=false;
        };
      })
    }
    else{
      this.load=false;
    }
  


  }
}
