import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LogInService } from 'src/app/log-in/log-in.service';
import { MenuService } from 'src/app/menu/menu.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: `./navbar.component.html`,
})
export class NavbarComponent { 


  constructor(protected logInService: LogInService, 
    private matIconRegistry: MatIconRegistry, private DomSanitizer: DomSanitizer,
      private menuService: MenuService) {
    
      this.matIconRegistry.addSvgIcon('cart', this.DomSanitizer.bypassSecurityTrustResourceUrl('/assets/shopping_cart.svg'))
  }


  public menuTouched: boolean = false;

  toggleMenuTouched() {
    this.menuTouched = !this.menuTouched;
  }
}
