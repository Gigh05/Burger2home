import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Account, AccountUpdate, Address, Language } from '../api/models';
import { AccountsService } from '../api/services';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    street: null,
    number: null,
    box: null,
    city: null,
    postcode: null,
    language: null,
    phone: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  currentUser: any;
  account: Account | undefined;
  content?: string;

  constructor(private storageService: StorageService,
    private accountsService: AccountsService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }

    if(!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }

    this.currentUser = this.storageService.getUser();
    // console.log(this.currentUser);
    // console.log(this.currentUser.userId);
    // console.log(this.currentUser.accessToken);
    this.accountsService.get({
      'userId': this.currentUser.userId
    }).subscribe(val => {
      this.account = <Account>val;
      console.log(val)
      this.form = {
        firstname: this.account?.firstname,
        lastname: this.account?.lastname,
        street: this.account?.preferredAddress?.street,
        number: this.account?.preferredAddress?.number,
        box: this.account?.preferredAddress?.box,
        city: this.account?.preferredAddress?.city,
        postcode: this.account?.preferredAddress?.postcode,
        language: this.account?.preferredLanguage,
        phone: this.account?.preferredPhoneNumber
      };
    });
  }

  onSubmit(): void {
     let updatedAddress: Address = {
      'box': this.form.box,
      'city': this.form.city,
      'id': undefined,
      'number': this.form.number,
      'postcode': this.form.postcode,
      'street': this.form.street
    }

     let accountUpdate: AccountUpdate = {
      'firstname': this.form.firstname,
      'lastname': this.form.lastname,
      'preferredAddress': updatedAddress,
      'preferredLanguage': Language.En,
      'preferredPhoneNumber': this.form.phone
    }

     this.accountsService.save({
      'userId': this.currentUser.userId,
      'body': accountUpdate
    }).subscribe({
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

  reloadPage(): void {
    window.location.reload();
  }

  logout() {
    this.storageService.clean();
    this.router.navigate(['/login']);
  }
}
