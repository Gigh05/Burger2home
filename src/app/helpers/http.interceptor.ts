import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {

    private readonly token: string;

    constructor(private storageService: StorageService) {
        let user = this.storageService.getUser();
        this.token = user.accessToken;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            const modReq = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            return next.handle(modReq);
        }
        return next.handle(req);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];