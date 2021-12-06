import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './PAGES/categories/categories.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { PaymentComponent } from './PAGES/payment/payment.component';
import { ProductPageComponent } from './PAGES/product-page/product-page.component';
import { SignupComponent } from './PAGES/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'product-page',component:ProductPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'payment',component:PaymentComponent},
  {path:'categories',component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
