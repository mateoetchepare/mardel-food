import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private buttonPressedSubject = new BehaviorSubject<boolean>(false);
  buttonPressed$ = this.buttonPressedSubject.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  signUp(user: User, callback: (succesful: boolean) => void): void {
    this.setButtonPressed(true)
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.httpClient.post(`http://localhost:3000/api/auth/signup`, user, { headers: header })
    .subscribe((res: any) => {
      if (res) {
        this.setButtonPressed(false);
        callback(true);
      }
    }, (error) => {
      if (error.status === 401) {
        this.setButtonPressed(false);
        callback(false);
      }
    });
  }

  private setButtonPressed(value: boolean): void {
    this.buttonPressedSubject.next(value);
  }

}
