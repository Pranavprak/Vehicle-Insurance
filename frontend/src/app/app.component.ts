import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Insurance';
  constructor() {sessionStorage.clear(); }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
 
  }
 
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
  changes() {
    document.getElementById("login").style.display="none";
    document.body.style.backgroundColor = "white";
    document.getElementById("register").style.display="none";
    
  
  }
  changesside() {
    document.getElementById("login").style.display="none";
    document.body.style.backgroundColor = "white";
    document.getElementById("register").style.display="none";
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  
  }
  backchanges() {
    document.getElementById("login").style.display="block";
    document.getElementById("register").style.display="block";
    document.getElementById("title").style.display="block";
  
  }
  backchangesl() {
    document.getElementById("login").style.display="block";
    document.getElementById("register").style.display="block";
    document.getElementById("title").style.display="block";
    document.getElementById("logout").style.display="none";
    document.getElementById("home").style.pointerEvents="auto";
  
  }


}
