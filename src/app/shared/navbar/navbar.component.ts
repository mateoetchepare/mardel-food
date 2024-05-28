import { Component } from '@angular/core';
import { LogInService } from 'src/app/log-in/log-in.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: `./navbar.component.html`,
})
export class NavbarComponent { 


  constructor(protected logInService: LogInService) {
    
  }


  public menuTouched: boolean = false;

  toggleMenuTouched() {
    this.menuTouched = !this.menuTouched;
  }
}
