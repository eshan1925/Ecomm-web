import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';
import { ProductsComponent } from 'src/app/COMPONENTS/products/products.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css','./style.css']
})
export class ProductPageComponent implements OnInit {

  items: any | undefined;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getJson().subscribe(resp=>{
      this.items = resp[0];
      console.log(resp[0]);
    })
  }

}
