import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/log-in/log-in.service';

@Component({
  selector: 'shared-navbar-button',
  templateUrl: './navbar-button.component.html',
})
export class NavbarButtonComponent implements OnInit { 



  @Input()
  public content: String = '';

  

  constructor(private router: Router, private loginService: LogInService) {
    
  }

  ngOnInit(): void {
    
  }

  public routeChange() {
    if (this.content.toLowerCase() === 'log out') {
      this.loginService.logout();
    } else {
      const encodedContent = encodeURIComponent(this.content.toLowerCase());
      this.router.navigate([`/${encodedContent}`]);
    }
  }
}
