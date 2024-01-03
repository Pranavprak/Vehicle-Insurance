import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private staffser:StaffService) {     document.getElementById("login").style.display = "none";

  document.body.style.backgroundColor = "white";
  document.getElementById("register").style.display = "none";}
  response:any;
  ngOnInit(){
        //this.response=this.staffser.getstatus();

  }

}
