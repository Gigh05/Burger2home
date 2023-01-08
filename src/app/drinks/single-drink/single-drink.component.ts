import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Drink, Ingredient } from 'src/app/api/models';
import { DrinkService } from 'src/app/api/services';

@Component({
  selector: 'app-single-drink',
  templateUrl: './single-drink.component.html',
  styleUrls: ['./single-drink.component.scss']
})
export class SingleDrinkComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  @Input() drink!: Drink;

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    console.log(this.drink)
    this.drinkService.getDrinkById({
      'id': <number>this.drink.id,
      'Accept-Language': 'fr'
    }).subscribe(val => this.drink.ingredients = <Ingredient[]>val.ingredients);
  }

}
