import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcel-delivery-service',
  templateUrl: './parcel-delivery-service.component.html',
  styleUrls: ['./parcel-delivery-service.component.css']
})
export class ParcelDeliveryServiceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectPayments(){
    this.router.navigateByUrl("payments");
  }
}
