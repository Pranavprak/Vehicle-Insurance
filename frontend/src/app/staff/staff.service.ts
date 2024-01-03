import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../new-user/Status';

@Injectable()
export class StaffService {

    response:any;
    baseUrl = "http://localhost:8080/status";

    constructor(private http: HttpClient) {} 

    getstatus(){
        return this.http.get(this.baseUrl);
    }
    getuser(){
      return this.http.get("http://localhost:8080/user")
    }
    getcustomer(){
      return this.http.get("http://localhost:8080/customer")
    }
    getonestatus(id:number){
      return this.http.post<number>("http://localhost:8080/onestatus",id)
    }

    poststatus(status:Status){
      this.http.post<Status>("http://localhost:8080/status",status).subscribe((response)=>{
        this.response=response;
        console.log(this.response);
      })
      return this.response;
      //return this.http.post<Customer>("http:localhost:8080/customer",register);
    
    }

    /*(){
        this.http.get(this.baseUrl).subscribe((response)=>{
          this.response=response;
          console.log(this.response);
        })
        return this.response;
        //return this.http.post<Customer>("http:localhost:8080/customer",register);
      
      }*/


}