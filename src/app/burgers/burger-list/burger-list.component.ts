import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageBurgerSummary, Burger, BurgerSummary } from 'src/app/api/models';
import { BurgerService } from 'src/app/api/services';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class BurgerListComponent implements OnInit {
  burgers!: Burger[];
  burgerSummary!: BurgerSummary[];
  obsBurger!: Observable<PageBurgerSummary>

  constructor(private burgerService: BurgerService) {}

  ngOnInit(): void {
    this.burgerService.getAllBurgers({
      'page': 0,
      'size': 20,
      'Accept-Language': 'fr'
    }).subscribe(val => this.burgerSummary = <BurgerSummary[]>val.content);
  }

}
