/* tslint:disable */
/* eslint-disable */
import { Promo } from './promo';
export interface BurgerSummary {
  description?: string;
  id?: number;
  imageUrl?: string;
  name?: string;
  price?: number;
  promo?: Promo;
  spicy?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
}
