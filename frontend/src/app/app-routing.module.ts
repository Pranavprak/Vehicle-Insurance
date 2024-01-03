import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AboutComponent } from './about/about.component';
import { PlansComponent } from './plans/plans.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { StaffComponent } from './staff/staff.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffClaimComponent } from './staff-claim/staff-claim.component';
import { StaffRequestComponent } from './staff-request/staff-request.component';


const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path: 'login',component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'forget', component:ForgetPasswordComponent},
  { path: 'about', component:AboutComponent},
  { path: 'plans', component:PlansComponent},
  { path: 'new', component:NewUserComponent},
  { path: 'euser', component:ExistingUserComponent},
  {
    path:'staff',component:StaffComponent,
    children:[
      {path:'', redirectTo:'profile',pathMatch:'full'},
      {path:'profile',component:StaffProfileComponent},
      {path:'claim',component:StaffClaimComponent},
      {path:'request',component:StaffRequestComponent},
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
