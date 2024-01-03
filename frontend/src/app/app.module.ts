import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterLink } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlansComponent } from './plans/plans.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register/register.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { NewUserService } from './new-user/new-user.service';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { StaffService } from './staff/staff.service';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffClaimComponent } from './staff-claim/staff-claim.component';
import { StaffRequestComponent } from './staff-request/staff-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AboutComponent,
    ContactComponent,
    PlansComponent,
    NewUserComponent,
    ExistingUserComponent,
    AdminComponent,
    StaffComponent,
    StaffProfileComponent,
    StaffClaimComponent,
    StaffRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegisterService,LoginService,NewUserService,StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
