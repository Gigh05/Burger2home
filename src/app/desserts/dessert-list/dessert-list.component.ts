import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Dessert, DessertSummary, Language, PageDessertSummary } from 'src/app/api/models';
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

  constructor(private dessertService: DessertService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.dessertService.getAllDesserts({
      'page': 0,
      'size': 20,
      'Accept-Language': this.translateService.currentLang == 'en' ? Language.En : Language.Fr
    }).subscribe(val => this.dessertSummary = <DessertSummary[]>val.content);
  }

}
