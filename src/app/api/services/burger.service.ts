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

import { Burger } from '../models/burger';
import { Ingredient } from '../models/ingredient';
import { PageBurgerSummary } from '../models/page-burger-summary';

@Injectable({
  providedIn: 'root',
})
export class BurgerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllBurgers
   */
  static readonly GetAllBurgersPath = '/api/public/products/burgers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBurgers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBurgers$Response(params?: {

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
    spicy?: boolean;
    vegetarian?: boolean;
    vegan?: boolean;
    promo?: boolean;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageBurgerSummary>> {

    const rb = new RequestBuilder(this.rootUrl, BurgerService.GetAllBurgersPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
      rb.query('allergen', params.allergen, {});
      rb.query('ingredient', params.ingredient, {});
      rb.query('min-price', params['min-price'], {});
      rb.query('max-price', params['max-price'], {});
      rb.query('spicy', params.spicy, {});
      rb.query('vegetarian', params.vegetarian, {});
      rb.query('vegan', params.vegan, {});
      rb.query('promo', params.promo, {});
      rb.header('Accept-Language', params['Accept-Language'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageBurgerSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllBurgers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBurgers(params?: {

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
    spicy?: boolean;
    vegetarian?: boolean;
    vegan?: boolean;
    promo?: boolean;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<PageBurgerSummary> {

    return this.getAllBurgers$Response(params).pipe(
      map((r: StrictHttpResponse<PageBurgerSummary>) => r.body as PageBurgerSummary)
    );
  }

  /**
   * Path part for operation getBurgerById
   */
  static readonly GetBurgerByIdPath = '/api/public/products/burgers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBurgerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBurgerById$Response(params: {
    id: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Burger>> {

    const rb = new RequestBuilder(this.rootUrl, BurgerService.GetBurgerByIdPath, 'get');
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
        return r as StrictHttpResponse<Burger>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBurgerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBurgerById(params: {
    id: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Burger> {

    return this.getBurgerById$Response(params).pipe(
      map((r: StrictHttpResponse<Burger>) => r.body as Burger)
    );
  }

  /**
   * Path part for operation getAllBurgerIngredients
   */
  static readonly GetAllBurgerIngredientsPath = '/api/public/products/burgers/ingredients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBurgerIngredients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBurgerIngredients$Response(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Ingredient>>> {

    const rb = new RequestBuilder(this.rootUrl, BurgerService.GetAllBurgerIngredientsPath, 'get');
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
   * To access the full response (for headers, for example), `getAllBurgerIngredients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBurgerIngredients(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Array<Ingredient>> {

    return this.getAllBurgerIngredients$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ingredient>>) => r.body as Array<Ingredient>)
    );
  }

}
