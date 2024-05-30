import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthStorageService } from '../services/auth-storage.service';
import { Observable} from 'rxjs';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthStorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log("token "+this.auth.getToken().token);

    if(this.auth.getToken()!=null){
        console.log(this.auth.getToken().token);
        request = request.clone({
            setHeaders: {
              Authorization: `${this.auth.getToken().token}`
            }
          });
    }
    else{
        console.log("AAA123,");
    }
  
    return next.handle(request);
  }
}