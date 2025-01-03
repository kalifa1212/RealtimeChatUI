import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpContext} from "@angular/common/http";
import {Login} from "../../../../services/chatService/Login";
import {ChatServicesService} from "../../../../services/chatService/chat-services.service";
import { WebsocketService } from 'src/app/services/websocket/websocket.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {
  httpContext={} as HttpContext;
  errorMessage: string | undefined='';
  loginData: Login={};
  userId: number | undefined;
  constructor(
    private router: Router,
    private chatService: ChatServicesService,
    //public webSocketService: WebsocketService,
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log("connexion de l'utilisateur")
    this.chatService.Login(this.loginData).subscribe({next:(data)=>{
        this.router.navigate(['dashboard',data.id])
      },error:(error)=>{console.log(error.error)
        this.errorMessage=error.error.code
        //debugger;
      }});
  }
}
// https://medium.com/@parthiban.rajalingam/introduction-to-web-sockets-using-spring-boot-and-angular-b11e7363f051
// https://medium.com/@zayarthant/websocket-application-with-spring-boot-and-angular-part-3-angular-websocket-client-b8d2ce3efd20
// https://www.javaguides.net/2019/06/spring-boot-angular-8-websocket-example-tutorial.html