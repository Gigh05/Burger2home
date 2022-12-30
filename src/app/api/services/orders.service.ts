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

import { Order } from '../models/order';
import { PageOrderSummary } from '../models/page-order-summary';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll
   */
  static readonly GetAllPath = '/api/accounts/{userId}/orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params: {
    userId: string;

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
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PageOrderSummary>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.GetAllPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageOrderSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params: {
    userId: string;

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
    context?: HttpContext
  }
): Observable<PageOrderSummary> {

    return this.getAll$Response(params).pipe(
      map((r: StrictHttpResponse<PageOrderSummary>) => r.body as PageOrderSummary)
    );
  }

  /**
   * Path part for operation deleteOne
   */
  static readonly DeleteOnePath = '/api/accounts/{userId}/orders/{orderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOne$Response(params: {
    userId: string;
    orderId: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.DeleteOnePath, 'delete');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.path('orderId', params.orderId, {});
      rb.header('Accept-Language', params['Accept-Language'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOne(params: {
    userId: string;
    orderId: number;
    'Accept-Language'?: 'fr' | 'en';
    context?: HttpContext
  }
): Observable<Order> {

    return this.deleteOne$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

}
