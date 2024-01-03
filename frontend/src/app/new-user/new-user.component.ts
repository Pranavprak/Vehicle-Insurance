import { Component, OnInit } from '@angular/core';
import { NewUserService } from './new-user.service';
import { Customer } from '../register/Register';
import { User } from './new-user';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { Status } from './Status';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  response:Customer;
  customer:Customer;
  response1:Customer;
  status:Status;
  user:User;
  date=new Date();
  constructor(private service1:RegisterService,private service:NewUserService,private route:Router) { 
    this.customer=new Customer();
    this.response1=new Customer();
    this.status=new Status();
    document.getElementById("login").style.display="none";
    document.body.style.backgroundColor = "white";
    document.getElementById("register").style.display="none";
    this.user=new User();
   /* this.service.getcustomer().subscribe((data)=>
    {
      console.log(data);
      this.response=data;
    })
    this.service.getcustomer().subscribe((data)=>
    {
      console.log(data);
      this.response=data;
    })*/
  }

  ngOnInit() {
      this.customer = JSON.parse(sessionStorage.getItem("customer"));
      console.log(this.customer);
  }
  async postuser(){
    await this.service1.sessionapply(this.customer.email).subscribe((response)=>
    {
      this.status.policy_status='Active';
      this.status.callback_status='Not Requested';
      this.status.claim_status='Not Claimed';
      this.status.queries='Nil';
      console.log(response);
      this.response1=response;
      this.user.customer_id=this.response1.id;
      console.log(this.user.customer_id);
      this.user.start_date=String(this.date.toDateString());
      this.user.end_date=String(this.date.toDateString()+40);
      console.log(this.user)
      this.response=this.service.postuser(this.user);
      this.response=this.service.poststatus(this.status);
      alert("Registration success");
      this.route.navigate(["/login"]);
      
      
    })
  
  }

}
