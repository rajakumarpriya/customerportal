import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {
  form: any = {
    // username: null,
    // email: null,
    // password: null
    firstName: null, lastName: null, address: null, state: null, country: null,password : null,
    emailAddress: null, contactPreference : null, pan: null,contactNo:null,role:null,rolesval:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
   // const { username, email, password } = this.form;
    const { firstName, lastName, address, state, country,password ,
      emailAddress, contactPreference , pan,contactNo,role,rolesval } = this.form;
 
   // signUpRequest.getPan(),signUpRequest.getContactNo(),signUpRequest.getContactPreference(),



    this.authService.register(firstName, lastName, address, state, country,password ,
      emailAddress, contactPreference , pan,contactNo, role,rolesval).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
