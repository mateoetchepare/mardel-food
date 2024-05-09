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
    const encodedContent = encodeURIComponent(this.content.toLowerCase());
    console.log(encodedContent)
    this.router.navigate([`/${encodedContent}`])
  }
}
