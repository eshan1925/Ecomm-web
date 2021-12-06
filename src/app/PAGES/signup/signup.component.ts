import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm: FormGroup = new FormGroup({
    fname:new FormControl(null,Validators.required),
    lname:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]) 
  });
  constructor(private fb: FormBuilder,private apiService:ApiService,private _router:Router) { }

  ngOnInit(): void {
    // this.createForm()
  }

  // createForm(){
  //   this.SignupForm = this.fb.group({
  //     fname:[''],
  //     lname:[''],
  //     email:[''],
  //     password:['']
  //   })
  // }
  // registerUser(user: any){
  //   console.log(user);
  //   this.apiService.registerUser(user);
  // }

  signUp(){
    if(!this.SignupForm.valid){
      console.log("invalid");return;
    }
      this.apiService.registerUser(JSON.stringify(this.SignupForm.value))
      console.log(JSON.stringify(this.SignupForm.value));
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

}
