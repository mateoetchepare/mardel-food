import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogInService implements OnInit {

  private buttonPressedSubject = new BehaviorSubject<boolean>(false);
  private snackBarEvent = new Subject<string>();

  buttonPressed$ = this.buttonPressedSubject.asObservable();
  snackBarEvent$ = this.snackBarEvent.asObservable();

  private authenticated: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getAuthenticationStatus();
   }

   ngOnInit(): void {
   }

  getAuthenticationStatus() {
    this.httpClient.get('http://localhost:3000/api/auth/status', { withCredentials: true })
    .subscribe((res) => {
      this.authenticated = true;
    }), (error: any) => {
      this.authenticated = false;
    }
  }

  get isAuthenticated() {
    return this.authenticated;
  }

/*
  saveCookie(cookie: any) {
    localStorage.setItem("sessionId", JSON.stringify(cookie));
  }
  */


  submitCredentials(credentials: User): void {
    this.setButtonPressed(true);
    this.httpClient.post(`http://localhost:3000/api/auth/login`, credentials, { withCredentials: true })
    .subscribe((res: any) => {
      if (res && res.cookie && res.passport) {
        this.authenticated = true;
        this.setButtonPressed(false);
        this.snackBarEvent.next('success');
        window.location.reload();
        this.router.navigate(['/home']);
      }
    }, (error) => {
      console.log(error);
      console.log(`parseado es ${JSON.parse(error)}`)
        this.setButtonPressed(false);
        this.snackBarEvent.next(error);
    });
    this.router.navigate(['/home']);
  }

  logout() {
    this.httpClient.post(`http://localhost:3000/api/auth/logout`, {}, { withCredentials: true })
    .subscribe((res: any) => {
        this.authenticated = false
        console.log('entra por res')
    }, (error) => {
      console.log('entra por error')
        this.snackBarEvent.next(error);
    });
  }

  private setButtonPressed(value: boolean): void {
    this.buttonPressedSubject.next(value);
  }

}
