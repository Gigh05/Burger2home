/* tslint:disable */
/* eslint-disable */
import { OrderSummary } from './order-summary';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageOrderSummary {
  content?: Array<OrderSummary>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
