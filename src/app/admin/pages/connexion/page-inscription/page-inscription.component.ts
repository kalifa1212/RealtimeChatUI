import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ChatServicesService } from 'src/app/services/chatService/chat-services.service';
import { Utilisateur } from 'src/app/services/chatService/Utilisateur';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent {

   userForm= new FormGroup({
    nom: new FormControl<string>(''),
    prenom:new FormControl<string>(''),
    email:new FormControl<string>(''),
    motDePasse:new FormControl<string>(''),
    identifiant:new FormControl<string>(''),
    dateDeNaissance:new FormControl<Date>(new Date),
    sujetPreferer:new FormControl<string[]>([])
  }) ;
  errorMessage: string | undefined='';
   user: Utilisateur={}
   constructor(private formBuilder:FormBuilder,
    private chatService:ChatServicesService,
    private router :Router){

   }
   ngOnInit(){
    //this.innitform
   }

   onSubmitForm(){
    const formValue=this.userForm.value;
    this.user.nom=formValue['nom']
    this.user.prenom=formValue['prenom']
    this.user.email=formValue['email']
    this.user.motDePasse=formValue['motDePasse']
    this.user.identifiant=formValue['identifiant']
    this.user.dateDeNaissance=formValue['dateDeNaissance']
  
     this.chatService.NewUser(this.user).subscribe({next:(data)=>{
       console.log(this.user)
      this.router.navigate(['dashboard',data.id])
    },error:(error)=>{
      //console.log("erreur lors de l'enregistrement de l'utilisateur",error)
      this.errorMessage=error.error.message
    }})
   }
}
//seka seka mareshal dj