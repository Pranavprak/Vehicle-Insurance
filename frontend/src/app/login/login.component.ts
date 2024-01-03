import { Component, OnInit } from '@angular/core';
import { Customer } from '../register/Register';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUserService } from '../new-user/new-user.service';
import { RegisterService } from '../register/register.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register: Customer;
  response1: any;
  loginn: any;
  constructor(private loginservice: LoginService, private service1: RegisterService,private nservice:NewUserService, private router: Router) {
    document.getElementById("login").style.display = "none";
 
    document.body.style.backgroundColor = "white";
    document.getElementById("register").style.display = "none";
  }

  ngOnInit(): void {
    this.register = new Customer();
  }




  login() {

    this.loginservice.login(this.register).subscribe((data) => {
      console.log(data);
      if (Boolean(data) == true) {
         this.service1.sessionapply(this.register.email).subscribe(async (response) => {
          await sessionStorage.setItem("customer", JSON.stringify(response));
          this.nservice.sessionapply(response.id).subscribe(async (response2) => {
            await sessionStorage.setItem("user", JSON.stringify(response2));

            alert('Login success');
            this.router.navigate(["/euser"]);
          })
        })


      }
      else if(this.register.email=='staff' && this.register.password=='staff'){
        this.router.navigate(["/staff"]);
      }
      else {
        alert("No success");
      }
    })

  }

}
