import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../new-user/new-user';
import { Status } from './Status';

@Injectable()
export class NewUserService {
    response:any;
    baseUrl = "http://localhost:8080/newuser/";

    constructor(private http: HttpClient) { }

          postuser(user:User){
            this.http.post<User>("http://localhost:8080/user",user).subscribe((response)=>{
              this.response=response;
              console.log(this.response);
            })
            return this.response;
          
          }
          poststatus(status:Status){
            this.http.post<Status>("http://localhost:8080/status",status).subscribe((response)=>{
              this.response=response;
              console.log(this.response);
            })
            return this.response;
          
          }
          getcustomer(){
            /*this.http.get("http://localhost:8080/customer").subscribe((response)=>{
              this.response=response;
              console.log(this.response);
            })
            return this.response;*/
          return this.http.get("http://localhost:8080/customer");
          }
          sessionapply(id:number){
            return this.http.post<User>("http://localhost:8080/user/session",id);
          }
    }

