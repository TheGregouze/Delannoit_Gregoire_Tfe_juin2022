import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/user.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  //Formulaire des donnees a comparer dans la DB
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private _user:UserService) {}

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
    if(!this.loginForm.valid){
      console.log('invalid');return;
    }
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/']);} ,
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.loginForm.value));
  }

}
