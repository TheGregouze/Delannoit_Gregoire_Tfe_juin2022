import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '@core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidemenuComponent {
  // NOTE: Ripple effect make page flashing on mobile
  @Input() ripple = false;

  menu$ = this.menu.getAll();
  buildRoute = this.menu.buildRoute;

  constructor(private menu: MenuService, private _router: Router) {}

  moveToOffice(){
    this._router.navigate(['/office365'])
  }

  moveToCamera(){
    this._router.navigate(['/camera'])
  }

}
