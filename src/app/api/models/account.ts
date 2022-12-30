/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { Language } from './language';
export interface Account {
  emailVerified?: boolean;
  firstname: string;
  id?: string;
  lastname: string;
  preferredAddress?: Address;
  preferredLanguage: Language;
  preferredPhoneNumber?: string;
  username: string;
}
