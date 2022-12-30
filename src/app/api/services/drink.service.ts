/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Drink } from '../models/drink';
import { DrinkType } from '../models/drink-type';
import { Ingredient } from '../models/ingredient';
import { PageDrinkSummary } from '../models/page-drink-summary';

@Injectable({
  providedIn: 'root',
})
export class DrinkService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllDrinks
   */
  static readonly GetAllDrinksPath = '/api/public/products/drinks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDrinks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDrinks$Response(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
    allergen?: Array<number>;
    ingredient?: Array<number>;
    'min-price'?: number;
    'max-price'?: number;
    promo?: boolean;
    type?: DrinkType;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageDrinkSummary>> {

    const rb = new RequestBuilder(this.rootUrl, DrinkService.GetAllDrinksPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
      rb.query('allergen', params.allergen, {});
      rb.query('ingredient', params.ingredient, {});
      rb.query('min-price', params['min-price'], {});
      rb.query('max-price', params['max-price'], {});
      rb.query('promo', params.promo, {});
      rb.query('type', params.type, {});
      rb.header('Accept-Language', params['Accept-Language'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageDrinkSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllDrinks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDrinks(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
    allergen?: Array<number>;
    ingredient?: Array<number>;
    'min-price'?: number;
    'max-price'?: number;
    promo?: boolean;
    type?: DrinkType;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<PageDrinkSummary> {

    return this.getAllDrinks$Response(params).pipe(
      map((r: StrictHttpResponse<PageDrinkSummary>) => r.body as PageDrinkSummary)
    );
  }

  /**
   * Path part for operation getDrinkById
   */
  static readonly GetDrinkByIdPath = '/api/public/products/drinks/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDrinkById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDrinkById$Response(params: {
    id: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Drink>> {

    const rb = new RequestBuilder(this.rootUrl, DrinkService.GetDrinkByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.header('Accept-Language', params['Accept-Language'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Drink>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDrinkById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDrinkById(params: {
    id: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Drink> {

    return this.getDrinkById$Response(params).pipe(
      map((r: StrictHttpResponse<Drink>) => r.body as Drink)
    );
  }

  /**
   * Path part for operation getAllDrinkIngredients
   */
  static readonly GetAllDrinkIngredientsPath = '/api/public/products/drinks/ingredients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDrinkIngredients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDrinkIngredients$Response(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Ingredient>>> {

    const rb = new RequestBuilder(this.rootUrl, DrinkService.GetAllDrinkIngredientsPath, 'get');
    if (params) {
      rb.header('Accept-Language', params['Accept-Language'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Ingredient>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllDrinkIngredients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDrinkIngredients(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Array<Ingredient>> {

    return this.getAllDrinkIngredients$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ingredient>>) => r.body as Array<Ingredient>)
    );
  }

}
