import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('token');

    if (authToken) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: "Bearer " + localStorage.getItem('token') // Added a space after "Bearer"
        }
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}