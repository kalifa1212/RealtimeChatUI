import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "./Utilisateur";
import {Login} from "./Login";

@Injectable({
  providedIn: 'root'
})
export class ChatServicesService {

 
  constructor(private http: HttpClient) { }
   host="localhost"
  Login(loginData: Login):Observable<any>{
    const headers = { 'Content-Type': 'application/json'};
    const body = {email: loginData.email,passwd: loginData.passwd };
    return this.http.request<Utilisateur>('post','http://'+this.host+':8080/user/authenticate',{
      body: body,
      headers: headers,
    }); 
  }
  NewUser(user: Utilisateur):Observable<Utilisateur>{
    const headers = { 'Content-Type': 'application/json'};
    //const body = {nom: user.nom,prenom: user.prenom,email:user.email,motDePasse:user.motDePasse };
    return this.http.request<Utilisateur>('post','http://'+this.host+':8080/user/nouveau',{
      body: user,
      headers: headers,
    });
  }
  DisconnectUser(user: Utilisateur):Observable<Utilisateur>{
    const headers = { 'Content-Type': 'application/json'};
    //const body = {nom: user.nom,prenom: user.prenom,email:user.email,motDePasse:user.motDePasse };
    return this.http.request<Utilisateur>('post','http://'+this.host+':8080/user/nouveau',{
      body: user,
      headers: headers,
    });
  }
  OnLineUser():Observable<any>{
    const headers = { 'Content-Type': 'application/json'};
    return this.http.request<Utilisateur>('get','http://'+this.host+':8080/users',{
      headers: headers,
    });
  }
  User(id?:number):Observable<any>{
    const headers = { 'Content-Type': 'application/json'};
    return this.http.request<Utilisateur>('get','http://'+this.host+':8080/users/find/'+id,{
      headers: headers, }
  )}
  listMessage(senderId?:number,receiverId?:number):Observable<any>{
    const headers = { 'Content-Type': 'application/json'};
    return this.http.request<Utilisateur[]>('get','http://'+this.host+':8080/messages/'+senderId+'/'+receiverId,{
      headers: headers, }
  )}

  chatList(userId?:number,receiverId?:number):Observable<any>{
    const headers = { 'Content-Type': 'application/json'};
    return this.http.request<Utilisateur[]>('get','http://'+this.host+':8080/chat/list/'+userId,{
      headers: headers, }
  )}

}
