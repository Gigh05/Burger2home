/* tslint:disable */
/* eslint-disable */
import { PromoType } from './promo-type';
export interface Promo {
  amount?: number;
  endDate?: string;
  id?: number;
  productId?: number;
  productUrl?: string;
  type?: PromoType;
}
