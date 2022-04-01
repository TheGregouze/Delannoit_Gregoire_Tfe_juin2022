import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <img src="./assets/images/logo1.png" class="matero-branding-logo-expanded" alt="logo" />
      <span class="matero-branding-name">Computer Telecom</span>
    </a>
  `,
})
export class BrandingComponent {}
