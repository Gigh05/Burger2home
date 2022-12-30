/* tslint:disable */
/* eslint-disable */
import { DrinkSummary } from './drink-summary';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageDrinkSummary {
  content?: Array<DrinkSummary>;
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
