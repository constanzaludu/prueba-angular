import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from '../../../core/services/error.service';


@Injectable()
export class CatchErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error) => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // backend error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
  this.errorService.sendError(errorMessage);
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        return throwError(() => {
          new Error(errorMessage);
        });
      })
    );
  }
}
