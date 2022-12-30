/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { OrderStatus } from './order-status';
export interface Order {
  creationTimestamp?: string;
  id?: number;
  shippingAddress?: Address;
  status: OrderStatus;
  totalPrice?: number;
}
