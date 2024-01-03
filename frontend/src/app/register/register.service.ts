import { Customer } from './Register';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
    response:any;
    baseUrl = "http://localhost:8080/customer/";

    constructor(private http: HttpClient) {} 
      
      
      postcustomer(register:Customer){
            this.http.post<Customer>("http://localhost:8080/customer",register).subscribe((response)=>{
              this.response=response;
              console.log(this.response);
            })
            return this.response;
            //return this.http.post<Customer>("http:localhost:8080/customer",register);
          
          }
          sessionapply(email:String){
            return this.http.post<Customer>("http://localhost:8080/customer/session",email);/*.subscribe((response)=>{
              this.response=response;
              console.log(this.response);
            })
            return this.response;*/
          }
          changepassword(register:Customer){
           return this.http.post<Customer>("http://localhost:8080/change",register)
          }
        }

