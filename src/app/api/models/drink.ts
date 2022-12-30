/* tslint:disable */
/* eslint-disable */
import { Allergen } from './allergen';
import { DrinkType } from './drink-type';
import { Ingredient } from './ingredient';
import { Promo } from './promo';
export interface Drink {
  allergens?: Array<Allergen>;
  description?: string;
  id?: number;
  imageUrl?: string;
  ingredients?: Array<Ingredient>;
  name?: string;
  price?: number;
  promo?: Promo;
  type?: DrinkType;
}
