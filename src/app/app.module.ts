import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderBodyComponent } from './reminder-body/reminder-body.component';
import { NewReminderComponent } from './new-reminder/new-reminder.component';
import { FooterComponent } from './footer/footer.component';
import { ViewReminderComponent } from './view-reminder/view-reminder.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {UsernameValidator} from './validators/username';
import {EmailValidator} from './validators/email';
import { CustomFormsModule } from 'ngx-custom-validators';
import { UpcomingComponent } from './upcoming/upcoming.component';
@NgModule({
  declarations: [
    AppComponent,
    ReminderListComponent,
    ReminderBodyComponent,
    NewReminderComponent,
    FooterComponent,
    ViewReminderComponent,
    AppBoardComponent,
    LoginComponent,
    SignupComponent,
    UpcomingComponent,
  
    

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  entryComponents:[ViewReminderComponent,NewReminderComponent,ReminderListComponent,ReminderBodyComponent,UpcomingComponent],
  providers: [
    UsernameValidator,
    EmailValidator,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
