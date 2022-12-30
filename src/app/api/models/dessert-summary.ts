/* tslint:disable */
/* eslint-disable */
import { DessertType } from './dessert-type';
import { Promo } from './promo';
export interface DessertSummary {
  description?: string;
  id?: number;
  imageUrl?: string;
  name?: string;
  price?: number;
  promo?: Promo;
  type?: DessertType;
}
