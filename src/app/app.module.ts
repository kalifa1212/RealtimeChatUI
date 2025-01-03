import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PageLoginComponent } from './admin/pages/connexion/page-login/page-login.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { PageInscriptionComponent } from './admin/pages/connexion/page-inscription/page-inscription.component';
//import { TableComponent } from './admin/components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {IntercepteurService} from "./services/intercepteur/intercepteur.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ChatPageComponent } from './admin/pages/chat-page/chat-page.component';
import { OnlineuserComponent } from './admin/components/onlineuser/onlineuser.component';
import { SendMessageComponent } from './admin/components/send-message/send-message.component';
import { ErrorPageComponent } from './admin/components/error-page/error-page.component';
import { DatePipe } from './admin/pages/pipes/date.pipe';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ChatBoxComponent } from './admin/pages/chatbox/chat-box/chat-box.component';
import { OnlineUserComponent } from './admin/pages/chatbox/online-user/online-user.component';
import { RecentUserComponent } from './admin/pages/chatbox/recent-user/recent-user.component';


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    DashboardComponent,
    PageInscriptionComponent,
    ChatPageComponent,
    OnlineuserComponent,
    SendMessageComponent,
    ErrorPageComponent,
    ChatBoxComponent,
    OnlineUserComponent,
    RecentUserComponent,
    //DatePipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
         MatIconModule,
         MatMenuModule,
         MatSidenavModule,
         MatDividerModule,
        MatBadgeModule,
         MatToolbarModule,
         MatTooltipModule,
         MatListModule,
         MatFormFieldModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatRadioModule,
        MatSelectModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        MatCheckboxModule,
      HttpClientModule,
    ],
  providers: [
    DatePipe,
    // {
    //   // provide:HTTP_INTERCEPTORS,
    //   // useClass:IntercepteurService,
    //   // multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
