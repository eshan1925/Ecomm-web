import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm!: FormGroup;
  constructor(private fb: FormBuilder,private apiService:ApiService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.SignupForm = this.fb.group({
      fname:[''],
      lname:[''],
      email:[''],
      password:['']
    })
  }
  registerUser(user: any){
    console.log(user);
    this.apiService.registerUser(user);
  }

}
