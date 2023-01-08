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

import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCart
   */
  static readonly GetCartPath = '/api/accounts/{userId}/cart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCart$Response(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Cart>> {

    const rb = new RequestBuilder(this.rootUrl, CartsService.GetCartPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Cart>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCart(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<Cart> {

    return this.getCart$Response(params).pipe(
      map((r: StrictHttpResponse<Cart>) => r.body as Cart)
    );
  }

  /**
   * Path part for operation updateCart
   */
  static readonly UpdateCartPath = '/api/accounts/{userId}/cart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCart()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCart$Response(params: {
    userId: string;
    context?: HttpContext
    body: Cart
  }
): Observable<StrictHttpResponse<Cart>> {

    const rb = new RequestBuilder(this.rootUrl, CartsService.UpdateCartPath, 'put');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Cart>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCart$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCart(params: {
    userId: string;
    context?: HttpContext
    body: Cart
  }
): Observable<Cart> {

    return this.updateCart$Response(params).pipe(
      map((r: StrictHttpResponse<Cart>) => r.body as Cart)
    );
  }

  /**
   * Path part for operation validateCart
   */
  static readonly ValidateCartPath = '/api/accounts/{userId}/cart/validate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateCart$Response(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CartsService.ValidateCartPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateCart(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.validateCart$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
