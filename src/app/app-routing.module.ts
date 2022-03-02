import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationGuard } from './authentication.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ParcelDeliveryServiceComponent } from './parcel-delivery-service/parcel-delivery-service.component';
import { PaymentsComponent } from './payments/payments.component';
import { SignupComponent } from './signup/signup.component';
import { TrackingDetailsComponent } from './tracking-details/tracking-details.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "package-delivery-service",
    component: ParcelDeliveryServiceComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "order-history",
    component: OrderHistoryComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "tracking-details",
    component: TrackingDetailsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "payments",
    component: PaymentsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
