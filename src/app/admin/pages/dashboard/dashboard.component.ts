import {Component, Input, ViewChild} from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatSidenav} from "@angular/material/sidenav";
import { WebsocketService } from 'src/app/services/websocket/websocket.service';
import { ChatServicesService } from 'src/app/services/chatService/chat-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  ConnectedUser: string=""
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  IdConnected?:number 
  data:any

  constructor(private observer: BreakpointObserver,private websocket: WebsocketService,
    private router:Router,
    private chatService:ChatServicesService
  ) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  ReceiveIdentifiant(identifiant: number) {
    this.chatService.User(identifiant).subscribe({next:(response)=>{
      this.ConnectedUser=response.identifiant;
      this.data=response
    },error:(error)=>{console.log("error : ",error)}});
    
  }
  deconnection(){
    console.log("deconnexion de l'utilsateur")
    this.websocket.DisconnectUser(this.data)
    this.router.navigate([''])
  }
  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
