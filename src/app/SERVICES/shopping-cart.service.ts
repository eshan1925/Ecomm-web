import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  addProduct = (product: string)=>{
    console.log('added_products',product)
    localStorage.setItem('shopping_cart',product)
  }
}
