import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { TranslateService } from '@ngx-translate/core';
import { Burger, Cart, CartItem, Ingredient, Language, LocalTime } from 'src/app/api/models';
import { AccountsService, CartsService, GeneralService } from 'src/app/api/services';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-burger-extra',
  templateUrl: './burger-extra.component.html',
  styleUrls: ['./burger-extra.component.scss']
})
export class BurgerExtraComponent implements OnInit {
  burger: Burger = {};
  BurgerIngredients: Ingredient[] = [];
  FinalIngredients: Ingredient[] = [];
  checked = false;
  indeterminate = false;
  disabled = false;
  errorMessage = '';

  constructor(private bottomSheetRef: MatBottomSheetRef<BurgerExtraComponent>,
    private generalService: GeneralService,
    private cartsService: CartsService,
    private storageService: StorageService,
    private accountsService: AccountsService,
    private translateService: TranslateService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
      this.burger = data['burger']
    }

  ngOnInit(): void {

    this.generalService.getAllIngredients({
      'Accept-Language': this.translateService.currentLang == 'en' ? Language.En : Language.Fr
    }).subscribe(val => {
      let BurgerIngredients : Ingredient[] = <Ingredient[]>this.burger.ingredients;
      let AllIngredients: Ingredient[] = val;
      let OtherIngredients: Ingredient[] = [];

      AllIngredients.forEach(allElem => {
        let exist = false
        BurgerIngredients.forEach(BurgElem => {
          if(allElem.name == BurgElem.name) {
            exist = true
          }
        })
        if(!exist) {
          OtherIngredients.push(allElem);
        }
      })

      this.BurgerIngredients = BurgerIngredients;
      this.FinalIngredients = OtherIngredients

      this.BurgerIngredients.forEach(element => {
        element.selected = true;
      })
    });
  }

  openLink(event: MouseEvent): void {
    // this.bottomSheetRef.dismiss();
    // event.preventDefault();
  }

  validateExtra() {
    
  }

  onSubmit(): void {
    let currentUser = this.storageService.getUser();
    let selectedIngredients: number[] = [];

    this.BurgerIngredients.forEach(element => {
      if(element.selected == true) {
        selectedIngredients.push(<number>element.id);
      }
    })

    this.FinalIngredients.forEach(element => {
      if(element.selected == true) {
        selectedIngredients.push(<number>element.id);
      }
    })

    this.accountsService.get({
      'userId': currentUser.userId,
    }).subscribe(account => {

      let localTime: LocalTime = {
        'hour': 0,
        'minute': 30,
        'nano': 0,
        'second': 0,
      }

      let cartItem: CartItem = {
        'extras': selectedIngredients,
        'id': undefined,
        'productId': this.burger.id,
        'promoId': undefined,
        'quantity': 1
      }
  
      let cartItems: CartItem[] = []
      cartItems.push(cartItem)
  
       let cart: Cart = {
        'items': cartItems,
        'promoId': undefined,
        'requestedDeliveryTime': undefined, //localTime (Bug backend?)
        'shippingAddress': undefined, //account.preferredAddress (Bug backend?)
        'totalPrice': this.burger.price
      }
  
      this.cartsService.updateCart({
        'userId': currentUser.userId,
        'body': cart
      }).subscribe(val => {
        console.log(val)
        this.bottomSheetRef.dismiss();
      });
      
    });
  }

}