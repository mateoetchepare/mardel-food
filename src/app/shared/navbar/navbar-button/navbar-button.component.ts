import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar-button',
  templateUrl: './navbar-button.component.html',
})
export class NavbarButtonComponent { 

  @Input()
  public content: String = '';

  

  constructor(private router: Router) {
    
  }

  public routeChange() {
    this.router.navigate([`/${this.content.toLowerCase()}`]);
  }
}
