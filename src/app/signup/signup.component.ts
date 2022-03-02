import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router, private service:ApiserviceService) { }

  errormsg:any;

  ngOnInit(): void {
  }
  redirectLogin(){
    this.router.navigateByUrl("login");
  }

  userForm = new FormGroup({
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  userSubmit(){

    // console.log(this.userForm.value);
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.reset();
        alert("Your account has been created!");
        // let redirect = confirm("Go back to Login Page?");
        // if(redirect){
        //   this.router.navigateByUrl("login");
        // }
        this.router.navigateByUrl("login");
      });
    }
    else{
      alert("Please fill out all the fields.");
      this.errormsg = "please fill out all the fields!"
    }
  }
}
