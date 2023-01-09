// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { OAuthService } from './services/oauth.service';
// import * as _ from 'lodash';

// @Injectable()
// export class GoogleHeaderInterceptor implements HttpInterceptor {
//   private googleApiKeyHeader = 'X-Goog-Api-Key';
//   private apiKey = 'AIzaSyA5rMRet6UPwSHmbIawJxQ-5iVNsaqH_rw';
//   private token: string;
  
//   constructor(private oauthService: OAuthService) {
//     this.token = this.oauthService.getToken();
//   }

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     if (!_.includes(request.url, 'google')) {
//       return next.handle(request);
//     }

//     let headers = request.headers.set(this.googleApiKeyHeader, this.apiKey);

//     if (this.token) {
//       headers = request.headers.set('Authorization',  `Bearer ${this.token}`);
//     }
    
//     const modifiedReq = request.clone({
//       headers: headers
//     });

//     return next.handle(modifiedReq);
//   }
// }
