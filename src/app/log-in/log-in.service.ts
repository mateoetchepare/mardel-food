import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private httpClient: HttpClient) {

   }

   

  saveCookie(cookie: any) {
    localStorage.setItem("userCredentials", JSON.stringify(cookie));
  }

  submitCredentials(credentials: User): void {
    console.log('hola?')
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.httpClient.post(`http://localhost:3000/api/auth/login`, credentials, { headers: header })
    .subscribe((res) => {
      console.log(res);
      this.saveCookie(res);
    })
  }

}
