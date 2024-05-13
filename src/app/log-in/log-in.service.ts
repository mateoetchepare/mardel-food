import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User.interface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private httpClient: HttpClient) {

   }

  submitCredentials(credentials: User) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.httpClient.post(`http://localhost:3000/api/login`, credentials, { headers: header });
  }

}
