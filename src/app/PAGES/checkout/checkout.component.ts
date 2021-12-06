import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  constructor(public shopping_cart: ShoppingCartService,private _user:ApiService, private _router:Router) {
    this._user.user();
  }

  ngOnInit(): void {
    this.getShoppingCart()
  }

  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items();
  }

  deleteEventHandler(p: undefined){
    console.log("event handler")
    this.getShoppingCart()
  }

}
