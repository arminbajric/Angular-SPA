import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
  component:AppComponent,

  },
  {
    path:'login',
    component:LoginComponent,
   
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'app/:user',
    component:AppBoardComponent,
    canActivate:[AuthGuard]
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
