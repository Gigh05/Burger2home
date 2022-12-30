/* tslint:disable */
/* eslint-disable */
import { OrderStatus } from './order-status';
export interface OrderSummary {
  creationTimestamp?: string;
  id?: number;
  itemCount?: number;
  status?: OrderStatus;
}
