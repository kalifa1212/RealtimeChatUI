import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, from, mergeMap, tap, timer } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Utilisateur } from 'src/app/services/chatService/Utilisateur';
import { ChatServicesService } from 'src/app/services/chatService/chat-services.service';
import { MessagePayload } from 'src/app/services/websocket/messagePayload';
import { WebsocketService, payloadReceive } from 'src/app/services/websocket/websocket.service';
import {DatePipe,CommonModule} from "@angular/common";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  providers: [DatePipe]
})
export class ChatPageComponent implements OnInit,AfterViewInit,OnDestroy{
  //searchControl!: FormControl;
  
  searchControl = new FormControl<string >('');
  // options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  // filteredOptions: Observable<User[]>;
  @ViewChild('endOfChat') endOfChat: ElementRef={} as ElementRef

  // ---------------
  @Input() isMobile = true;
  @Output() sendIdentifiant = new EventEmitter<number>();
  //listUser: Array<Utilisateur>=[];
  SenderUser: Utilisateur={};
  ListConversation: Array<payloadReceive>=[];
  conversion: payloadReceive={
    id: 0,
    expediteurId: 0,
    chatId: '',
    userDestinataireId: 0,
    contenu: '',
    groupeDestinataire: 0,
    dateHeure: 0
  };
  testBoucle:string[]=['test','test2','test3','test3','test3','test3']
  receiverUser: Utilisateur={};
  messagePayload: MessagePayload={};
  greeting: any;
  name: string | undefined;
  idUtilisateur?:number;
  sentoId?:number;
  test:Utilisateur={};
  messageOnread:any;
  ContenuMessage: string="";
  public notifications = 0;

  constructor(
    private datePipe:DatePipe,
    private chatService: ChatServicesService,
    public webSocketService: WebsocketService,
    private activatedRoute: ActivatedRoute,
    private ref:ChangeDetectorRef
  ) {
   }
   ngOnChanges(){} // when value change on output or input
	ngDoCheck(){}	//Developer's custom change detection.
	ngAfterContentInit(){}//	After component content initialized.
	ngAfterContentChecked(){}	//After every check of component content.
	ngAfterViewInit(){}	//After the views of a component are initialized.
	ngAfterViewChecked(){} //	After every check of the views of a component.
	 // at the end


  ngOnInit(): void {
   // const count=new Observable;
    //count.subscribe((value:any)=>{},()=>{})
    const id= this.activatedRoute.snapshot.params['id'];
    this.idUtilisateur=id;
    this.chatService.User(this.idUtilisateur).subscribe({next:(data)=>{
      this.SenderUser=data;
      //this.webSocketService.subscribe(this.SenderUser.identifiant);
    },error:(error)=>{console.log("error while fetching User by id",error)}});
    this.findOnLineUser();
     /// execution du timer
     this.CreationTimer(3000).pipe(
      tap((x)=> console.log("execution du tache apres delait ")),
    )
    .subscribe(
      (Response)=>{
        console.log(Response)
       this.webSocketService.subscribe(this.SenderUser.identifiant);
       this.EnvoiDeIdentifiant(this.SenderUser.id)
       },
    (err)=>console.log("error"),
    ()=>{console.log("complete")}
  );
  }
  CreationTimer(time: number){
    console.log("execution dans ",time," a compter de ",new Date)
    return timer(time)
  }


  InitMessage():void{
    this.messagePayload.expediteurId=this.idUtilisateur;
    this.messagePayload.userDestinataireId=this.sentoId;
    this.messagePayload.contenu=this.ContenuMessage;
    this.messagePayload.dateHeure=this.datePipe.transform(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss.SSS');
    console.log(this.messagePayload.dateHeure)
    this.webSocketService.send(this.messagePayload);
    this.conversion.contenu=this.messagePayload.contenu;
    this.conversion.expediteurId=this.messagePayload.expediteurId;
    this.conversion.userDestinataireId=this.messagePayload.userDestinataireId;
    this.webSocketService.ListConversation.push(this.conversion);
    this.ContenuMessage="";
    this.scrollToBottom();
  }
  findOnLineUser():void{
    this.chatService.OnLineUser().subscribe({next:(data)=>{
      //this.listUser=data;
      this.webSocketService.listUser=data
    },error:(error)=>{console.log("error while fetching online Users",error)}});
    // this.chatService.chatList(this.idUtilisateur).subscribe({next:(data)=>{
    //   //this.listUser=data;
    //   this.webSocketService.listUser=data
    // },error:(error)=>{console.log("error while fetching online Users",error)}});
  }
  findUser(id? :number):Utilisateur{
    this.chatService.User(id).subscribe({next:(data)=>{
      this.test=data;
    },error:(error)=>{console.log("error while fetching User by id",error)}});
    return this.test;
  }
  EnvoiDeIdentifiant(value?: number) {
    this.sendIdentifiant.emit(value);
  }
  ReceiveId(newItem?: number) {
    this.scrollToBottom();
    this.sentoId=newItem;
    this.chatService.User(this.sentoId).subscribe({next:(data)=>{
      this.receiverUser=data;
      this.LoadMessage();
    },error:(error)=>{console.log("error while fetching User ",error)}});
    this.scrollToBottom();
  }

  LoadMessage() {
    this.scrollToBottom();
    this.chatService.listMessage(this.idUtilisateur,this.receiverUser.id).subscribe(
      {next:(data)=>{
        this.webSocketService.ListConversation=data;
        console.log(data)
      },error:(error)=>{console.log("error while loading message",error)}}
    );
  }
  scrollToBottom(){
    setTimeout(()=>{
      if (this.endOfChat){
        this.endOfChat.nativeElement.scrollIntoView({behavior:"smooth"})
      }
    },100);

  }
  handleSuppression($event: any) :void{
    if ($event==='success'){
    } else{
    }
  }
  ngOnDestroy(){
    this.webSocketService.DisconnectUser(this.SenderUser)
  }
}
