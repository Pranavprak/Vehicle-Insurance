import { Component, OnInit } from '@angular/core';
import { Customer } from '../register/Register';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  register:Customer;
  constructor(private service:RegisterService) {
    this.register=new Customer();
   }

  ngOnInit(): void {
  }
  submit(){
    this.service.changepassword(this.register).subscribe((response)=>{
      if(Boolean(response)==true)
      alert("Password updated");
      else
      alert("Your credentials is wrong");
    })
  }

}
