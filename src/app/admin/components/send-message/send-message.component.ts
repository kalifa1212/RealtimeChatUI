import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { payloadReceive } from 'src/app/services/websocket/websocket.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit{

  //@Input() recepteur = true;
  @Input() Message?: payloadReceive;
  @Input() idExpediteur?: number;
  expediteur:boolean=true; //false c pour aligner a droite et true aligner a gauche
  public container:any;

  ngAfterViewInit(){
    this.container=document.getElementById("msgcontainer");
    this.container.scrollTop=this.container.scrollHeight;
  }
  ngOnInit(): void {
    if(this.idExpediteur==this.Message?.expediteurId){
      this.expediteur=false;
    }
   console.log("id expediteurMessage: ",this.Message?.expediteurId," id expediteurcompte",this.idExpediteur)
  }

}
