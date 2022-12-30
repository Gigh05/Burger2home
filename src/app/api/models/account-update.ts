/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { Language } from './language';
export interface AccountUpdate {
  firstname: string;
  lastname: string;
  preferredAddress?: Address;
  preferredLanguage: Language;
  preferredPhoneNumber?: string;
}
