import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Burger, CartItem, Language } from 'src/app/api/models';
import { BurgerService } from 'src/app/api/services';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  totalPrice: number = 0
  burger: Burger = {};
  @Input() cartItem: CartItem = {
    'extras': new Array<number>
  };

  constructor(private burgerService: BurgerService,
    private translateService: TranslateService) { }
  
  ngOnInit(): void {
    if(this.cartItem != undefined) {
      this.burgerService.getBurgerById({
        'id': <number>this.cartItem.productId,
        'Accept-Language': this.translateService.currentLang == 'en' ? Language.En : Language.Fr
      }).subscribe(val => {
        this.burger = val
        if(this.burger.price != undefined && this.cartItem.quantity != undefined) {
          this.totalPrice = this.burger.price * this.cartItem.quantity
        }
      });
    }
  }

}
