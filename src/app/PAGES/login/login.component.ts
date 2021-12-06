import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)])
  });

  constructor(private fb: FormBuilder,private _router:Router,private _user:ApiService) { }

  ngOnInit(): void {
    
    }

  Login(){
    if(!this.LoginForm.valid){
      console.log("Invalid");return;
    }
    console.log(JSON.stringify(this.LoginForm.value));
    this._user.login(JSON.stringify(this.LoginForm.value));
  }

  moveToSignUp(){
    this._router.navigate(['/signup']);
  }
}
