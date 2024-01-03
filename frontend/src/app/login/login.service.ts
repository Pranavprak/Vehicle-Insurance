import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../register/Register';

@Injectable()
export class LoginService {
    response:any;
    baseUrl = "http://localhost:8080/login";

    constructor(private http: HttpClient) { }

         
    login(register:Customer){
     return this.http.post<Customer>("http://localhost:8080/login",register);
    }

  }