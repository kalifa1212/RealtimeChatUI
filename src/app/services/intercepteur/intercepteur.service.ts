import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntercepteurService  {
  //
  // urlsToNotUse: Array<string>;
  // constructor() {
  //   this.urlsToNotUse= [
  //     'authentication/authenticate',
  //     'authentication/token/verify/{jwtToken}'
  //   ];
  // }
  //
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let authenticationResponse: AuthenticationResponse={};
  //   if (localStorage.getItem("connectUser")){
  //     authenticationResponse=JSON.parse(
  //       localStorage.getItem("connectUser") as string
  //     );
  //   }
  //   if (this.isValidRequestForInterceptor(req.url)) {
  //     let modifiedRequest = req.clone({
  //         setHeaders: {
  //               Authorization: `Bearer ${authenticationResponse.accessToken}`,
  //
  //             }
  //     });
  //     //console.log("test-01",modifiedRequest);
  //     return next.handle(modifiedRequest);
  //   }
  //
  //   //-----------------exclude login------------------------
  //   // const url="/muslimapp/v1/authentication/authenticate";
  //   // //console.log(authenticationResponse);
  //   // const authReq=req.clone({
  //   //   headers: new HttpHeaders({
  //   //     Authorization:'Bearer ' + authenticationResponse.accessToken
  //   //   })
  //   //   // setHeaders: {
  //   //   //           Authorization: `Barer ${authenticationResponse.accessToken}`
  //   //   //         }
  //   //   });
  //  // console.log("test-02",req);
  //   //this.addJwtToken(req,authenticationResponse);
  //   return next.handle(req);
  // }
  // addJwtToken(request: HttpRequest<any>,authenticationResponse:AuthenticationResponse) {
  //   const token = authenticationResponse.accessToken;
  //
  //   return request.clone({
  //       setHeaders: {
  //         Authorization: `Barer ${token}`
  //       }
  //     })
  //  // console.log("test",request.headers);
  // }
  //  isValidRequestForInterceptor(requestUrl: string): boolean {
  // //  console.log("debut");
  //   let positionIndicator: string = 'muslimApi/v1/';
  //   let position = requestUrl.indexOf(positionIndicator);
  // //  console.log("test03",position);
  //   if (position > 0) {
  //     let destination: string = requestUrl.substr(position + positionIndicator.length);
  // //    console.log("test04",destination);
  //     for (let address of this.urlsToNotUse) {
  //       if (new RegExp(address).test(destination)) {
  //    //     console.log("test05-- identique");
  //         return false;
  //       }
  //     }
  //   }
  //    //console.log("test06-- non identique");
  //   return true;
  // }
}
