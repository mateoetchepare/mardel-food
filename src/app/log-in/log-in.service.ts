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
  private admin: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getAuthenticationStatus();
    this.checkIfAdmin();
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

  checkIfAdmin(): void {
    this.httpClient.get('http://localhost:3000/api/auth/status', { withCredentials: true })
    .subscribe((res: any) => {
      this.admin = res.isAdmin
    }), (error: any) => {
      console.log(error);
    }
  }

  get isAuthenticated() {
    return this.authenticated;
  }

  get isAdmin() {
    return this.admin;
  }

  submitCredentials(credentials: User): void {
    this.setButtonPressed(true);
    this.httpClient.post(`http://localhost:3000/api/auth/login`, credentials, { withCredentials: true })
    .subscribe((res: any) => {
      if (res && res.cookie && res.passport) {
        this.authenticated = true;
        this.checkIfAdmin();
        this.setButtonPressed(false);
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      }
    }, (error) => {
        this.setButtonPressed(false);
        console.log(error);
        console.log(error.error);
        this.snackBarEvent.next(error.error.message);
    });
  }

  logout() {
    this.httpClient.post(`http://localhost:3000/api/auth/logout`, {}, { withCredentials: true })
    .subscribe((res: any) => {
        this.authenticated = false
    }, (error) => {
        this.snackBarEvent.next(error);
    });
  }

  private setButtonPressed(value: boolean): void {
    this.buttonPressedSubject.next(value);
  }

}
