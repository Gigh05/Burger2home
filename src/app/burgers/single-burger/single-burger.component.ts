import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Burger } from 'src/app/api/models';
import { MatAccordion } from '@angular/material/expansion';

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

  constructor() {}

  ngOnInit(): void {
  }
}
