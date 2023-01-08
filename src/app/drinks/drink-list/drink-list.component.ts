import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink, DrinkSummary, PageDrinkSummary } from 'src/app/api/models';
import { DrinkService } from 'src/app/api/services';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  drinks!: Drink[];
  drinkSummary!: DrinkSummary[];
  obsDrink!: Observable<PageDrinkSummary>

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkService.getAllDrinks({
      'page': 0,
      'size': 20,
      'Accept-Language': 'fr'
    }).subscribe(val => this.drinkSummary = <DrinkSummary[]>val.content);
  }

}
