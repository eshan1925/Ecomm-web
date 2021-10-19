import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log('added to cart');
  }

}
