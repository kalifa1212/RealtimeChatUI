import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Utilisateur } from 'src/app/services/chatService/Utilisateur';

@Component({
  selector: 'app-onlineuser',
  templateUrl: './onlineuser.component.html',
  styleUrls: ['./onlineuser.component.scss']
})
export class OnlineuserComponent {
  @Input() isCollapsed = true;
  @Input() senderId? :number;
  @Input() connectedUserId? :number;
  @Input() userDto:Utilisateur={};
  @Output() sendIdEvent = new EventEmitter<number>();

  //test:boolean=true;

  ngOnInit(){
    // if(this.connectedUserId==this.userDto.id){
    //   console.log("idconnecteduser ",this.connectedUserId,"userdtoid ",this.userDto.id)
    // }
    
  }
  sendId(value?: number) {
    this.senderId=0;
    this.sendIdEvent.emit(value);
  }
}
