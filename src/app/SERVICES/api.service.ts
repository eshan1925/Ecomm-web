import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonUrl = 'assets/DATA/products.json';
  constructor(private Http: HttpClient) { }

  getJson():Observable<any>{
    return this.Http.get(this._jsonUrl);
  } 
  
  registerUser(user: any){
    this.Http.post('http://localhost:3000/register',user).subscribe(res=>{
      console.log(res);
    });
  }
}

