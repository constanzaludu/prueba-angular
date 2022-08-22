import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AddKeysInterceptor implements HttpInterceptor {
  //constructor() {}

  setAuthToken(): string {
    return `&ts=${environment.ts}&apikey=${
      environment.publicKey
    }&hash=${localStorage.getItem('hash')}`;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url !== '/assets/i18n/en.json') {
      const signedUrl: HttpRequest<any> = request.clone({
        url: request.url + this.setAuthToken(),
      });
      return next.handle(signedUrl);
    } else {
      const signedUrl: HttpRequest<any> = request.clone({
        url: request.url,
      });
      return next.handle(signedUrl);
    }
  }
}
