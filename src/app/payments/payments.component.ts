import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  orderConfirmed(){
    alert("Order Confirmed");
    let redirect = confirm("Do you want to see Orders History?");
    if(redirect){
      this.router.navigateByUrl("order-history");
    }
    else{
      this.router.navigateByUrl("home");
    }
  }
}
