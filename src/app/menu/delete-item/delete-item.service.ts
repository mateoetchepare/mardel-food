import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';
import { env } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteItemService {

  constructor(private httpClient: HttpClient) {

  }

  deleteItem(menuItem: MenuItem): Observable<any> {// it returns an {} if succesful{
    return this.httpClient.delete(`http://localhost:${env.PORT}/api/menu-item/${menuItem.id}`)
  }
}
