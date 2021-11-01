import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  @Input()
  checkout_products: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('products',this.checkout_products)
  }

}
