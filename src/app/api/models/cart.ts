/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { CartItem } from './cart-item';
import { LocalTime } from './local-time';
export interface Cart {
  items?: Array<CartItem>;
  promoId?: number;
  requestedDeliveryTime?: LocalTime;
  shippingAddress?: Address;
  totalPrice?: number;
}
