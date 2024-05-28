import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from 'src/app/model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private buttonPressedSubject = new BehaviorSubject<boolean>(false);
  private snackBarEvent = new Subject<string>();
  buttonPressed$ = this.buttonPressedSubject.asObservable();
  snackBarEvent$ = this.snackBarEvent.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  signUp(user: User, callback: (callback: any) => void): void {
    this.setButtonPressed(true)
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.httpClient.post(`http://localhost:3000/api/auth/signup`, user, { headers: header })
    .subscribe((res: any) => {
      if (res) {
        this.setButtonPressed(false);
        callback('Sign up completed succesfully!');
      }
    }, (error) => {
        this.setButtonPressed(false);
        callback(error);
    });
  }

  private setButtonPressed(value: boolean): void {
    this.buttonPressedSubject.next(value);
  }

}
