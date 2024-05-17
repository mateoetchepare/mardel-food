import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: `./navbar.component.html`,
})
export class NavbarComponent { 
  public menuTouched: boolean = false;

  toggleMenuTouched() {
    this.menuTouched = !this.menuTouched;
  }
}
