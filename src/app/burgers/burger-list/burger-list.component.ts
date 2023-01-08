import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageBurgerSummary, Burger, BurgerSummary, Language } from 'src/app/api/models';
import { BurgerService } from 'src/app/api/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class BurgerListComponent implements OnInit {
  burgers!: Burger[];
  burgerSummary!: BurgerSummary[];
  obsBurger!: Observable<PageBurgerSummary>

  constructor(private burgerService: BurgerService,
    private translateService: TranslateService) {}

  ngOnInit(): void {
    console.log(this.translateService.currentLang == 'en' ? Language.En : Language.Fr)
    this.burgerService.getAllBurgers({
      'page': 0,
      'size': 20,
      'Accept-Language': this.translateService.currentLang == 'en' ? Language.En : Language.Fr
    }).subscribe(val => this.burgerSummary = <BurgerSummary[]>val.content);
  }

}
