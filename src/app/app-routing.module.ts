import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './admin/pages/connexion/page-login/page-login.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import {PageInscriptionComponent} from "./admin/pages/connexion/page-inscription/page-inscription.component";
import { ErrorPageComponent } from './admin/components/error-page/error-page.component';

const routes: Routes = [

  {
    path:'',
    component:PageLoginComponent
  },
  {
    path:'inscrire',
    component:PageInscriptionComponent
  },
  {
    path:'dashboard/:id', // add /:id
    component:DashboardComponent,
    //canActivate:[ApplicationGuardService],
    //children:[
      //{
        //path:'',
        //component:TableaudebordComponent,
      //}
    //]
  },
  { path:'not-found',component:ErrorPageComponent},
  { path:'**',redirectTo:'/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
