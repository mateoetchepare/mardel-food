import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-in',
  templateUrl: `log-in.component.html`,
})
export class LogInComponent implements OnInit { 
  public logIn: boolean = true;

  toggleLogIn() {
    this.logIn = !this.logIn;
    console.log(this.logIn)
  }

  ngOnInit(): void {
      console.log('hello!');
  }
}
