import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Drink, DrinkSummary, Language, PageDrinkSummary } from 'src/app/api/models';
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

  constructor(private drinkService: DrinkService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.drinkService.getAllDrinks({
      'page': 0,
      'size': 20,
      'Accept-Language': this.translateService.currentLang == 'en' ? Language.En : Language.Fr
    }).subscribe(val => this.drinkSummary = <DrinkSummary[]>val.content);
  }

}
