import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  myFunction() {
    let x = (<HTMLInputElement>document.getElementById("nav"));
    // let x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("login");
  }

  userToken = localStorage.getItem("userAccessToken") ? JSON.parse(localStorage.getItem("userAccessToken")!) : false;
}
