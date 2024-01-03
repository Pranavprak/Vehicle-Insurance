import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff/staff.service';
import { User } from '../new-user/new-user';
import { Customer } from '../register/Register';

@Component({
  selector: 'app-staff-claim',
  templateUrl: './staff-claim.component.html',
  styleUrls: ['./staff-claim.component.css']
})
export class StaffClaimComponent implements OnInit {
  response:any;
  response1:User[];
  response2:Customer[]
  response3: any;
  value:string;
 
  constructor(private staffser:StaffService) { }

  ngOnInit(){
    this.staffser.getstatus().subscribe((data)=>{
      this.response=data;
    })
    this.staffser.getuser().subscribe((data:User[])=>{
      this.response1=data;
      
    })
    this.staffser.getcustomer().subscribe((data:Customer[])=>{
      this.response2=data;
      
    })

  }

  update(status){
    //status.claim_status=value;
    this.response3=this.staffser.poststatus(status);
  }

}
