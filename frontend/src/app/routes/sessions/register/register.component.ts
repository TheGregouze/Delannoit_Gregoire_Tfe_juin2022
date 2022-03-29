import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router) {}

  ngOnInit() {}


//-----------------------------------------------------------------------------------------
// FONCTIONS AJOUTEES
//-----------------------------------------------------------------------------------------

  //Permet de se déplacer dans le component login
  moveToLogin(){
    this._router.navigate(['auth/login']);
  }
  
  //Permet de creer un nouvel utilisateur dans la DB
  register(){
    console.log('A venir')
  }

}
