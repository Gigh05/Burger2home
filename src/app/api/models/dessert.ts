/* tslint:disable */
/* eslint-disable */
import { Allergen } from './allergen';
import { DessertType } from './dessert-type';
import { Ingredient } from './ingredient';
import { Promo } from './promo';
export interface Dessert {
  allergens?: Array<Allergen>;
  description?: string;
  id?: number;
  imageUrl?: string;
  ingredients?: Array<Ingredient>;
  name?: string;
  price?: number;
  promo?: Promo;
  type?: DessertType;
}
