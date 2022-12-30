/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ProductService } from './services/product.service';
import { AccountsService } from './services/accounts.service';
import { AuthenticationService } from './services/authentication.service';
import { GeneralService } from './services/general.service';
import { DrinkService } from './services/drink.service';
import { DessertService } from './services/dessert.service';
import { BurgerService } from './services/burger.service';
import { OrdersService } from './services/orders.service';
import { CartsService } from './services/carts.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ProductService,
    AccountsService,
    AuthenticationService,
    GeneralService,
    DrinkService,
    DessertService,
    BurgerService,
    OrdersService,
    CartsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
