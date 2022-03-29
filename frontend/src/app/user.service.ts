import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http:HttpClient) { }


//-----------------------------------------------------------------------------------------
// SERVICES AJOUTES
//-----------------------------------------------------------------------------------------
  
  //Creer un nouvel utilisateur dans la DB
  register(body:any){
    return this._http.post('http://127.0.0.1:3000/register-api/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  };

  //Verifie si les donnees rentrées en frontend correspondent a celles dans la DB
  login(body:any){
    return this._http.post('http://127.0.0.1:3000/login-api/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  };

}
