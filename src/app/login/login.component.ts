import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service:ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
  }
  redirectSignup(){
    this.router.navigateByUrl("signup");
  }

  getAllData(){

    this.service.getAllData().subscribe((res)=>{

        console.log(res, "res==>");
        this.readData = res.data;
    });
  }

  userForm = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  checkLogin(){

    this.getAllData();

    if(this.userForm.valid){

      this.readData.forEach((user: { email: string; password: string; }) => {
        
          if(this.userForm.value.email == user.email && this.userForm.value.password == user.password){
              localStorage.setItem("userAccessToken", "true");
              this.router.navigateByUrl("home");
            }
      });
      let x = <HTMLInputElement>document.getElementById("invalid");
      x.style.display = "block";      
    }
    else{
      let x = <HTMLInputElement>document.getElementById("invalid");
          x.style.display = "block"; 
    }
  }
}


//ngModel method
  // email and password filled on login page by the user will be stored in these variables

  // email : string = "";
  // password : string = "";


  // checkLogin(){

  //   this.getAllData();

  //   this.readData.forEach((user: { email: string; password: string; }) => {
        
  //     if(this.email == user.email && this.password == user.password){
  //       localStorage.setItem("userAccessToken", "true");
  //       this.router.navigateByUrl("home");
  //     }
  //   });
  //   let x = <HTMLInputElement>document.getElementById("invalid");
  //   x.style.display = "block";

  //   // if(this.readData.length > 0){

      
  //   // }
  //   // else{
  //   //   let x = <HTMLInputElement>document.getElementById("invalid");
  //   //   x.style.display = "block";
  //   // }
  // }