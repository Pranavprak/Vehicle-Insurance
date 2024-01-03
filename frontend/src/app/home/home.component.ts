import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changes() {
    document.getElementById("login").style.display="none";
    document.body.style.backgroundColor = "white";
    document.getElementById("register").style.display="none";
    document.getElementById("title").style.display="none";
  
  }

}
