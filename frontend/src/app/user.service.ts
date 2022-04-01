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

  //Recupere les donnees sur les AP dans la DB.
  getModelAP(){
    let url = "http://localhost:3000/modelAP-api/modelAP";
    return this._http.get(url);
  }

  //Recupere les donnees sur les switchs dans la DB.
  getModelSwitch(){
    let url = "http://localhost:3000/modelSwitch-api/modelSwitch";
    return this._http.get(url);
  }

    //Recupere les donnees sur les routers dans la DB.
  getModelRouter(){
    let url = "http://localhost:3000/modelRouter-api/modelRouter";
    return this._http.get(url);
  }

}
