import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/api/models';
import { AuthenticationService } from '../api/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { firstname, lastname, email, password } = this.form;

    let signup: Signup = {
      'email': email,
      'firstname': firstname,
      'lastname': lastname,
      'password': password
    }

    this.authenticationService.register({'body': signup}).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
