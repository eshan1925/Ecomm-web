import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getJson().subscribe(resp=>{
      this.items = resp;
    })
  }

  
}
