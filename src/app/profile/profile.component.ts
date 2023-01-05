import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Account } from '../api/models';
import { AccountsService } from '../api/services';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
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

    // let user = this.storageService.getUser();
    // console.log(user.userId);
    // this.accountsService.get({
    //   'userId': user.userId
    // }).subscribe(val => {this.account = <Account>val.content; console.log(val.content)});
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser);
  }

  reloadPage(): void {
    window.location.reload();
  }

  logout() {
    this.storageService.clean();
    this.router.navigate(['/login']);
  }
}
