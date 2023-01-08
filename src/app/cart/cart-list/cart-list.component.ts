import { Component, OnInit } from '@angular/core';
import { Address, Burger, Cart, CartItem, Promo } from 'src/app/api/models';
import { AccountsService, BurgerService, CartsService, GeneralService } from 'src/app/api/services';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  totalPrice: number = 0
  tax: number = 0
  total: number = 0;
  discount: number = 0
  cartItems: CartItem[] = [];
  address: Address = {
    'city': "",
    'number': "",
    'street': "",
  }

  constructor(private cartsService: CartsService,
    private storageService: StorageService,
    private burgerService: BurgerService,
    private generalService: GeneralService,
    private accountsService: AccountsService) {}

  ngOnInit(): void {
    let currentUser = this.storageService.getUser();
    this.cartsService.getCart({
      'userId': currentUser.userId,
    }).subscribe(val => {
      console.log(val)
      this.total = <number>val.totalPrice
      if(val.items != undefined) {
        this.cartItems = val.items
        this.getTotalPrice(this.cartItems);
      }
    });
    
    this.accountsService.get({
      'userId': currentUser.userId
    }).subscribe(account => {
      if(account.preferredAddress) {
        this.address = account.preferredAddress
      }
    });
  }

  getTotalPrice(cartItems: CartItem[]) {
    this.cartItems.forEach(element => {
      if(element != undefined) {
        this.burgerService.getBurgerById({
          'id': <number>element.productId,
          'Accept-Language': "fr"
        }).subscribe(val => {
          if(val.price != undefined && element.quantity != undefined) {
            this.totalPrice = val.price * element.quantity
            this.tax = (this.totalPrice / 100) * 6
            this.discount = this.totalPrice - (this.total - this.tax)
          }
        });
      }
    })
  }

}
