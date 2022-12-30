/* tslint:disable */
/* eslint-disable */
import { BurgerSummary } from './burger-summary';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageBurgerSummary {
  content?: Array<BurgerSummary>;
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
