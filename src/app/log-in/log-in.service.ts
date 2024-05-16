import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  public isAuthenticated: boolean = false;
  private buttonPressedSubject = new BehaviorSubject<boolean>(false);
  buttonPressed$ = this.buttonPressedSubject.asObservable();

  constructor(private httpClient: HttpClient) {

   }

   

  saveCookie(cookie: any) {
    localStorage.setItem("userCredentials", JSON.stringify(cookie));
  }

  submitCredentials(credentials: User): void {
    this.setButtonPressed(true);
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.httpClient.post(`http://localhost:3000/api/auth/login`, credentials, { headers: header })
    .subscribe((res: any) => {
      if (res && res.cookie && res.passport) {
        this.isAuthenticated = true;
        this.saveCookie(res);
        this.setButtonPressed(false);
      }
    }, (error) => {
      if (error.status === 401) {
        this.setButtonPressed(false);
      }
    });
  }

  private setButtonPressed(value: boolean): void {
    this.buttonPressedSubject.next(value);
  }

}
