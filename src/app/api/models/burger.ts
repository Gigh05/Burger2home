/* tslint:disable */
/* eslint-disable */
import { Allergen } from './allergen';
import { Ingredient } from './ingredient';
import { Promo } from './promo';
export interface Burger {
  allergens?: Array<Allergen>;
  description?: string;
  extras?: Array<Ingredient>;
  id?: number;
  imageUrl?: string;
  ingredients?: Array<Ingredient>;
  name?: string;
  price?: number;
  promo?: Promo;
  spicy?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
}
