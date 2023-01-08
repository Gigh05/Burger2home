import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dessert, DessertSummary, PageDessertSummary } from 'src/app/api/models';
import { DessertService } from 'src/app/api/services';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.scss']
})
export class DessertListComponent implements OnInit {
  desserts!: Dessert[];
  dessertSummary!: DessertSummary[];
  obsDessert!: Observable<PageDessertSummary>

  constructor(private dessertService: DessertService) { }

  ngOnInit(): void {
    this.dessertService.getAllDesserts({
      'page': 0,
      'size': 20,
      'Accept-Language': 'fr'
    }).subscribe(val => this.dessertSummary = <DessertSummary[]>val.content);
  }

}
