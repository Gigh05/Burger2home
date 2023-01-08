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

import { Allergen } from '../models/allergen';
import { Ingredient } from '../models/ingredient';
import { Promo } from '../models/promo';

@Injectable({
  providedIn: 'root',
})
export class GeneralService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllPromo
   */
  static readonly GetAllPromoPath = '/api/public/promos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPromo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPromo$Response(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Promo>>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralService.GetAllPromoPath, 'get');
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
        return r as StrictHttpResponse<Array<Promo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllPromo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPromo(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Array<Promo>> {

    return this.getAllPromo$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Promo>>) => r.body as Array<Promo>)
    );
  }

  /**
   * Path part for operation getAllIngredients
   */
  static readonly GetAllIngredientsPath = '/api/public/ingredients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllIngredients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllIngredients$Response(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Ingredient>>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralService.GetAllIngredientsPath, 'get');
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
   * To access the full response (for headers, for example), `getAllIngredients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllIngredients(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Array<Ingredient>> {

    return this.getAllIngredients$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ingredient>>) => r.body as Array<Ingredient>)
    );
  }

  /**
   * Path part for operation getAllAllergens
   */
  static readonly GetAllAllergensPath = '/api/public/allergens';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAllergens()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAllergens$Response(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Allergen>>> {

    const rb = new RequestBuilder(this.rootUrl, GeneralService.GetAllAllergensPath, 'get');
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
        return r as StrictHttpResponse<Array<Allergen>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllAllergens$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAllergens(params?: {
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Array<Allergen>> {

    return this.getAllAllergens$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Allergen>>) => r.body as Array<Allergen>)
    );
  }

}
