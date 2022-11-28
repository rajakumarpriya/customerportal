import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';


// import {
//   AbstractControl,
//   FormBuilder,
//   FormGroup,
//   ValidatorFn,
//   Validators,
// } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // pwForm: FormGroup;
  form: any = {
    // username: null,
    // email: null,
    // password: null
    firstName: null, lastName: null, address: null, state: null, country: null,password : null,
    emailAddress: null, contactPreference : null, pan: null,contactNo:null,role:null,rolesval:"data"
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  //constructor(private authService: AuthService,private fb: FormBuilder) {
    constructor(private authService: AuthService) {
    // this.pwForm = fb.group({
    //   pw: fb.control('', [Validators.required]),
    //   check: fb.control('', [Validators.required]),
    // });
    // this.pwForm.addValidators(
    //   matchValidator(this.pwForm.get('pw'), this.pwForm.get('check'))
    // );
   }

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
// function matchValidator(
//   control: AbstractControl,
//   controlTwo: AbstractControl
// ): ValidatorFn {
//   return () => {
//     if (control.value !== controlTwo.value)
//       return { match_error: 'Value does not match' };
//     return null;
//   };
// }