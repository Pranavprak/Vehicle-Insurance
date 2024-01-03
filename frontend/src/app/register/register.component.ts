import { Component, OnInit } from '@angular/core';
import {Customer } from './Register';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Customer;
  response: any;
  constructor(private regservice:RegisterService,private route:Router) { }

  ngOnInit(): void {
    this.register=new Customer();
  }
  changes() {
    document.getElementById("login").style.display="none";
    document.body.style.backgroundColor = "white";
    document.getElementById("register").style.display="none";
  }

  
async postregister(){
  //console.log(this.register)
  this.response=this.regservice.postcustomer(this.register);
//  this.response=this.regservice.sessionapply(this.register.email);
  //console.log(this.response);

  await sessionStorage.setItem("customer", JSON.stringify(this.register));
     /* this.regservice.sessionapply(this.register)
                                       .subscribe((data) => {
                                            sessionStorage.setItem("customer", JSON.stringify(data));
                                      })*/   
   if(this.response==null) 
  this.route.navigate(['/new']);
  else
  alert('Regristration failure');

}

}
