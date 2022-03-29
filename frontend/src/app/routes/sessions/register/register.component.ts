import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {

  //Formulaire des donnees qui vont etre enregistrees dans la DB
  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.email,Validators.required]),
    username: new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass: new FormControl(null, Validators.required)
  });

  constructor(private _router:Router, private _user:UserService) {}

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
    if(!this.registerForm.valid || (this.registerForm.controls['password'].value != this.registerForm.controls['cpass'].value || !this.registerForm.controls['email'].value.endsWith('@computertelecom.be'))){
      console.log('invalid Form'); return;
    }
    this._user.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['auth/login']);},
      error=>console.error(error)
    );
}

}
