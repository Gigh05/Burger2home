/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { LocalTime } from './local-time';
export interface Cart {
  id?: number;
  items?: {
[key: string]: number;
};
  requestedDeliveryTime?: LocalTime;
  shippingAddress?: Address;
  totalPrice?: number;
}
