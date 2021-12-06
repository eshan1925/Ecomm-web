import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonUrl = 'assets/DATA/products.json';
  constructor(private Http: HttpClient,private _router:Router) { }

  getJson():Observable<any>{
    return this.Http.get(this._jsonUrl);
  } 
  
  registerUser(user: any){
    this.Http.post('http://localhost:3000/register',user,{
      observe:'body',
      headers:new HttpHeaders().append('Content-type','application/json')
    }).subscribe(
      data=>{console.log(data);this._router.navigate(['/login']);},
      error=>console.error(error)
    );
  }

  login(user:any){
    console.log("API SERVICE P");
    this.Http.post('http://localhost:3000/login',user,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-type','application/json')
    }).subscribe(
      data=>{console.log(data);this._router.navigate(['/']);},
      error=>console.error(error)
    );
  }

  user(){
    this.Http.post('http://localhost:3000/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-type','application/json')
    }).subscribe(
      data=>{console.log(data);},
      error=>this._router.navigate(['/'])
    );
  }

  logout(user:any){
    console.log("API SERVICE P");
    this.Http.post('http://localhost:3000/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-type','application/json')
    }).subscribe(
      data=>{console.log(data);this._router.navigate(['/']);},
      error=>console.error(error)
    );
  }


}

