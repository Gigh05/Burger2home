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

import { Dessert } from '../models/dessert';
import { DessertType } from '../models/dessert-type';
import { Ingredient } from '../models/ingredient';
import { PageDessertSummary } from '../models/page-dessert-summary';

@Injectable({
  providedIn: 'root',
})
export class DessertService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllDesserts
   */
  static readonly GetAllDessertsPath = '/api/public/products/desserts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDesserts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDesserts$Response(params?: {

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
    type?: DessertType;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageDessertSummary>> {

    const rb = new RequestBuilder(this.rootUrl, DessertService.GetAllDessertsPath, 'get');
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
        return r as StrictHttpResponse<PageDessertSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllDesserts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDesserts(params?: {

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
    type?: DessertType;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<PageDessertSummary> {

    return this.getAllDesserts$Response(params).pipe(
      map((r: StrictHttpResponse<PageDessertSummary>) => r.body as PageDessertSummary)
    );
  }

  /**
   * Path part for operation getDessertById
   */
  static readonly GetDessertByIdPath = '/api/public/products/desserts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDessertById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDessertById$Response(params: {
    id: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Dessert>> {

    const rb = new RequestBuilder(this.rootUrl, DessertService.GetDessertByIdPath, 'get');
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
        return r as StrictHttpResponse<Dessert>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDessertById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDessertById(params: {
    id: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Dessert> {

    return this.getDessertById$Response(params).pipe(
      map((r: StrictHttpResponse<Dessert>) => r.body as Dessert)
    );
  }

  /**
   * Path part for operation getAllDessertIngredients
   */
  static readonly GetAllDessertIngredientsPath = '/api/public/products/desserts/ingredients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDessertIngredients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDessertIngredients$Response(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Ingredient>>> {

    const rb = new RequestBuilder(this.rootUrl, DessertService.GetAllDessertIngredientsPath, 'get');
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
   * To access the full response (for headers, for example), `getAllDessertIngredients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDessertIngredients(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Array<Ingredient>> {

    return this.getAllDessertIngredients$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ingredient>>) => r.body as Array<Ingredient>)
    );
  }

}
