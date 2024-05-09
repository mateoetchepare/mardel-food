import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';
import { env } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteItemService {

  constructor(private httpClient: HttpClient) {

   }

   deleteItem(menuItem: MenuItem) {
    console.log('borra');
    //this.httpClient.delete<MenuItem>(`http://localhost:${env.PORT}/api/menu/`) //TODO
   }
}
