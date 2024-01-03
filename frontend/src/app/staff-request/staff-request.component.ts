import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff/staff.service';
import { User } from '../new-user/new-user';
import { Customer } from '../register/Register';
import { Status } from '../new-user/Status';

@Component({
  selector: 'app-staff-request',
  templateUrl: './staff-request.component.html',
  styleUrls: ['./staff-request.component.css']
})
export class StaffRequestComponent implements OnInit {
  response:any;
  response1:User[];
  response2:Customer[];
  response3: any;
  status:Status[]
  constructor(private staffser:StaffService) { }

  ngOnInit(){
    this.staffser.getstatus().subscribe((data)=>{
      this.response=data;
      console.log(this.response);
    })
    this.staffser.getuser().subscribe((data:User[])=>{
      this.response1=data;
      
    })
    this.staffser.getcustomer().subscribe((data:Customer[])=>{
      this.response2=data;
      
    })
  }

  update(status){
    this.response3=this.staffser.poststatus(status);
  }

}
