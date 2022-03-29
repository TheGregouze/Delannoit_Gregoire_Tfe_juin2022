import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {}


//-----------------------------------------------------------------------------------------
// FONCTIONS AJOUTEES
//-----------------------------------------------------------------------------------------

  //Permet de se déplacer dans le component register
  moveToRegister(){
    this._router.navigate(['auth/register'])
  }

  //Permet de se connecter a un compte existant dans la DB
  login() {
    console.log('A venir')
  }

}
