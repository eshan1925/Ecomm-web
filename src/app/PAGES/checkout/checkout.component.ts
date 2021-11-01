import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  constructor(private shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items();
  }

}
