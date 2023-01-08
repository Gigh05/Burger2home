import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Dessert, Ingredient } from 'src/app/api/models';
import { DessertService } from 'src/app/api/services';

@Component({
  selector: 'app-single-dessert',
  templateUrl: './single-dessert.component.html',
  styleUrls: ['./single-dessert.component.scss']
})
export class SingleDessertComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  @Input() dessert!: Dessert;

  constructor(private dessertService: DessertService) { }

  ngOnInit(): void {
    this.dessertService.getDessertById({
      'id': <number>this.dessert.id,
      'Accept-Language': 'fr'
    }).subscribe(val => this.dessert.ingredients = <Ingredient[]>val.ingredients);
  }

}
