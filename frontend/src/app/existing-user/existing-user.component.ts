
import { Component, OnInit } from '@angular/core';
import { Customer } from '../register/Register';
import { User } from '../new-user/new-user';
import { StaffService } from '../staff/staff.service';
import { Status } from '../new-user/Status';

@Component({
  selector: 'app-existing-user',
  templateUrl: './existing-user.component.html',
  styleUrls: ['./existing-user.component.css']
})
export class ExistingUserComponent implements OnInit {
  isCollapsed: boolean = true;          
  isPressed: boolean = true;
  isClicked: boolean = true;
  isProfile: boolean = true;
  isCalled: boolean = true;
  customer:Customer;
  user:User;
  responsee:Status;
  response2:any;
  response3: any;
  queries:string;
  constructor(private staffser:StaffService) {
    this.responsee=new Status();
   
   }

  ngOnInit(){
     this.user =  JSON.parse(sessionStorage.getItem("user"));
     this.customer = JSON.parse(sessionStorage.getItem("customer"));
     document.getElementById("home").style.pointerEvents="none";
     document.getElementById("logout").style.display="block";

  }
 
  toggleCollapse()
  {
    this.isCollapsed = !this.isCollapsed;
  }
  RtoggleCollapse()
  {
    this.staffser.getonestatus(this.user.customer_id).subscribe((data)=>{
      this.response2=data;
      this.response2.callback_status="Requested";
      this.response3=this.staffser.poststatus(this.response2);
    this.isCalled = !this.isCalled;
  })
  }
  CtoggleCollapse()
  {
    this.staffser.getonestatus(this.user.customer_id).subscribe((data)=>{
      this.response2=data;
      this.response2.claim_status="Claimed";
      this.response3=this.staffser.poststatus(this.response2);
      this.isPressed = !this.isPressed;
    })
  }
  TtoggleCollapse()
  {
    this.staffser.getonestatus(this.user.customer_id).subscribe((data)=>{
      this.response2=data;
    })
    this.isClicked = !this.isClicked;
  }
  submit(){
    this.response2.queries=this.queries;
    this.response3=this.staffser.poststatus(this.response2);
    this.isCalled = !this.isCalled;
  }
}
