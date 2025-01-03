import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { AppComponent } from 'src/app/app.component';
import { MessagePayload } from './messagePayload';
import { JsonPipe } from '@angular/common';
import { Utilisateur } from '../chatService/Utilisateur';

declare var SockJS: any;
declare var Stomp: any;

export type ListenerCallBack = (message: MessagePayload) => void;
export interface payloadReceive{
  id:number,
  expediteurId?:number,
  chatId:string,
  userDestinataireId?:number,
  contenu:string,
  groupeDestinataire:number
  dateHeure:number
}
export interface Displaymessage{
  recepteur:boolean,
  chatId:string,
  content:string,
}
@Injectable({
  providedIn: 'root'
})
export class WebsocketService { 
  
    
  public ListConversation: Array<payloadReceive>=[];
  public listUser: Array<Utilisateur>=[];
  test:string="";
  public stompClient: any;
  public senderId?:number ;
  public message:payloadReceive={
    id: 0,
    expediteurId: 0,
    chatId: '',
    userDestinataireId: 0,
    contenu: '',
    groupeDestinataire: 0,
    dateHeure: 0
  } ;
  //public msg:payloadReceive={};
  constructor() {
    this.initialiseWebsocket();
  }
  initialiseWebsocket(){
    //const serverUrl="http://localhost:8080/ws"; //192.168.148.113
    const serverUrl="http://localhost:8080/ws";
    const ws = new SockJS(serverUrl);
    this.stompClient=Stomp.over(ws);
    const that=this;
    this.stompClient.connect({},function(frame:any) {
      // that.stompClient.subscribe('/user/public',(event:any)=>{
      //   console.log(" nouveau message sur ",event.body)
      //  });
    });
  }

  send(message:any){
    this.stompClient.send('/app/chat',{},JSON.stringify(message))
  }
  DisconnectUser(user:Utilisateur){
    this.stompClient.send('/app/utilisateur.disconnectUser',{},JSON.stringify(user))
    console.log("user disconnected ")
  }
  public subscribe(identifiant?:string|null) {
      console.log("subscribing to public");
      this.stompClient.subscribe('/topic/public',(event:any)=>{
        this.test =JSON.parse(event.body).status
        if(this.test==="ONLINE"){
          this.listUser.push(JSON.parse(event.body))
        }
        else{
          let itemIndex = this.listUser.indexOf(JSON.parse(event.body));
          // console.log(itemIndex)
          // console.log(event.body)
          //this.listUser.filter((e, i) => i !== itemIndex);
          this.listUser.splice(itemIndex);
        }
        console.log(" nouveau message sur ",JSON.parse(event.body).status)
       });
      if(this.stompClient.connect){
        console.log(" pas encore connecter a ",identifiant);
        //this.initialiseWebsocket();
      }
      //this.connection.subscribe('/user/'+identifiant+'/queue/messages',
      this.stompClient.subscribe('/user/'+identifiant+'/queue/messages',(event:any)=>{
         this.message.contenu=JSON.parse(event.body).content;
         this.message.expediteurId=JSON.parse(event.body).senderId;
         this.senderId=JSON.parse(event.body).senderId;
         this.message.userDestinataireId=JSON.parse(event.body).recipientId;
         if(this.ListConversation.length!=0){
          this.ListConversation.push(this.message)
          console.log("Nouveau push ")
         }
         console.log("Nouveau message recu")
        });
  }
  // subscribeTo(id?:string):Observable<any>{
  //   this.stompClient.subscribe('/user/'+id+'/queue/messages');
  //   }
  //async
  async onMessagereceive(event:any){
    //console.log("evenement OnMessageReceive: ",JSON.stringify(event.body));
    //debugger;
    const that=this;
      // if(this.msg){
      //   //that.msg=event.body;
      // }
    
    
    //this.message=JSON.parse(event.body);
    //console.log("evenement /////: ",this.message);
   }
   // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
   public disconnect() {
    if (this.stompClient !== null) {
        this.stompClient.disconnect();
    }
  }

}
