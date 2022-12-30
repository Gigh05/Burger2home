/* tslint:disable */
/* eslint-disable */
import { DessertSummary } from './dessert-summary';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageDessertSummary {
  content?: Array<DessertSummary>;
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
