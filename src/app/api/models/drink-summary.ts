/* tslint:disable */
/* eslint-disable */
import { DrinkType } from './drink-type';
import { Promo } from './promo';
export interface DrinkSummary {
  description?: string;
  id?: number;
  imageUrl?: string;
  name?: string;
  price?: number;
  promo?: Promo;
  type?: DrinkType;
}
