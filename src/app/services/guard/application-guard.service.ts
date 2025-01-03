import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationGuardService {

  isTokenExpired=true;

  // constructor(
  //   private utilisateurService: UtilisateurService,
  //   private router: Router,
  // ) { }
  //
  // canActivate(next: ActivatedRouteSnapshot,
  //   //route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   this.tokenControl();
  //   return this.utilisateurService.isUserLogedAndAccessTokenValid();
  // }
  // tokenControl(): void {
  //   this.utilisateurService.Verify().subscribe((response) => {
  //       this.isTokenExpired=response;
  //     },
  //     (err) => { },
  //     () => {
  //         //console.log("finally ");
  //         if(this.isTokenExpired)
  //         {this.utilisateurService.disConnectUser();}
  //     }
  //   );
  //
  // }
}
