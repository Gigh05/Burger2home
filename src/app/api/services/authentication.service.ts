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

import { Login } from '../models/login';
import { Signup } from '../models/signup';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation token
   */
  static readonly TokenPath = '/api/auth/token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `token()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  token$Response(params: {
    context?: HttpContext
    body: Token
  }
): Observable<StrictHttpResponse<Token>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.TokenPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Token>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `token$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  token(params: {
    context?: HttpContext
    body: Token
  }
): Observable<Token> {

    return this.token$Response(params).pipe(
      map((r: StrictHttpResponse<Token>) => r.body as Token)
    );
  }

  /**
   * Path part for operation register
   */
  static readonly RegisterPath = '/api/auth/signup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: {
    context?: HttpContext
    body: Signup
  }
): Observable<StrictHttpResponse<Token>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.RegisterPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Token>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: {
    context?: HttpContext
    body: Signup
  }
): Observable<Token> {

    return this.register$Response(params).pipe(
      map((r: StrictHttpResponse<Token>) => r.body as Token)
    );
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/api/auth/signin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: {
    context?: HttpContext
    body: Login
  }
): Observable<StrictHttpResponse<Token>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.LoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Token>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: {
    context?: HttpContext
    body: Login
  }
): Observable<Token> {

    return this.login$Response(params).pipe(
      map((r: StrictHttpResponse<Token>) => r.body as Token)
    );
  }

}
