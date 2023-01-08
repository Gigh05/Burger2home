import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Allergen, Burger, Ingredient } from 'src/app/api/models';
import { BurgerService } from 'src/app/api/services';
import { MatAccordion } from '@angular/material/expansion';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BurgerExtraComponent } from '../burger-extra/burger-extra.component';

@Component({
  selector: 'app-single-burger',
  templateUrl: './single-burger.component.html',
  styleUrls: ['./single-burger.component.scss']
})
export class SingleBurgerComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  @Input() burger!: Burger;
  nameLang!: string;
  descriptionLang!: string;
  panelOpenState = false;
  showIngredients = true;

  constructor(private burgerService: BurgerService,
    private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.burgerService.getBurgerById({
      'id': <number>this.burger.id,
      'Accept-Language': 'fr'
    }).subscribe(val => this.burger.ingredients = <Ingredient[]>val.ingredients);

    this.burgerService.getBurgerById({
      'id': <number>this.burger.id,
      'Accept-Language': 'fr'
    }).subscribe(val => this.burger.allergens = <Allergen[]>val.allergens);
  }

  getBurgerInfos(id: number | undefined) {
    if(this.showIngredients)
    {
      this.showIngredients = false
    }
    else {
      this.showIngredients = true
    }
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BurgerExtraComponent, {
      panelClass: 'justify-content-center',
      data: { 'burger': this.burger }
    });
  }
}
