import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'environment';
import { MenuItem } from 'src/app/model/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class AddEditItemService {

  constructor(private httpClient: HttpClient) { 
    
  }

  sendNewMenuItem(newMenuItem: MenuItem) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
  });
    this.httpClient.post(`http://localhost:${env.PORT}/api/menu-item/new`, JSON.stringify(newMenuItem), { headers: header })
    .subscribe(response => {
      console.log(response); // TODO
    });
  }

}
