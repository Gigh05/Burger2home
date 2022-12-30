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

import { Account } from '../models/account';
import { AccountUpdate } from '../models/account-update';
import { PasswordUpdate } from '../models/password-update';

@Injectable({
  providedIn: 'root',
})
export class AccountsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation get
   */
  static readonly GetPath = '/api/accounts/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.GetPath, 'get');
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
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `get$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<Account> {

    return this.get$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Path part for operation save
   */
  static readonly SavePath = '/api/accounts/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: {
    userId: string;
    context?: HttpContext
    body: AccountUpdate
  }
): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.SavePath, 'put');
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
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: {
    userId: string;
    context?: HttpContext
    body: AccountUpdate
  }
): Observable<Account> {

    return this.save$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/api/accounts/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.DeletePath, 'delete');
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
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    userId: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation changePassword
   */
  static readonly ChangePasswordPath = '/api/accounts/{userId}/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: {
    userId: string;
    context?: HttpContext
    body: PasswordUpdate
  }
): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ChangePasswordPath, 'put');
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
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: {
    userId: string;
    context?: HttpContext
    body: PasswordUpdate
  }
): Observable<Account> {

    return this.changePassword$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Path part for operation validateEmail
   */
  static readonly ValidateEmailPath = '/api/accounts/{userId}/validate-email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateEmail$Response(params: {
    userId: string;
    referrer?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ValidateEmailPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.query('referrer', params.referrer, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `validateEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateEmail(params: {
    userId: string;
    referrer?: string;
    context?: HttpContext
  }
): Observable<string> {

    return this.validateEmail$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
