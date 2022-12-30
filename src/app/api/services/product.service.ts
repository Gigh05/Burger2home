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


@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProductImageById
   */
  static readonly GetProductImageByIdPath = '/api/public/products/{id}/image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductImageById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductImageById$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.GetProductImageByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'image/jpeg',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProductImageById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductImageById(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<string>> {

    return this.getProductImageById$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation saveProductImageById
   */
  static readonly SaveProductImageByIdPath = '/api/public/products/{id}/image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveProductImageById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProductImageById$Response(params: {
    id: number;
    context?: HttpContext
    body: {
'short'?: number;
'char'?: string;
'int'?: number;
'long'?: number;
'float'?: number;
'double'?: number;
'direct'?: boolean;
'readOnly'?: boolean;
}
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.SaveProductImageByIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `saveProductImageById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProductImageById(params: {
    id: number;
    context?: HttpContext
    body: {
'short'?: number;
'char'?: string;
'int'?: number;
'long'?: number;
'float'?: number;
'double'?: number;
'direct'?: boolean;
'readOnly'?: boolean;
}
  }
): Observable<void> {

    return this.saveProductImageById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
