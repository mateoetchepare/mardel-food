import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  updateMenuItem(oldMenuItem: MenuItem, menuItem: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const patchData: Partial<MenuItem> = {};

    if (oldMenuItem.name !== menuItem.name) {
      patchData.name = menuItem.name;
    }
    if (oldMenuItem.description !== menuItem.description) {
      patchData.description = menuItem.description;
    }
    if (oldMenuItem.price !== menuItem.price) {
      patchData.price = menuItem.price;
    }
    if (oldMenuItem.foodType !== menuItem.foodType) {
      patchData.foodType = menuItem.foodType;
    }
    if (oldMenuItem.image !== menuItem.image) {
      patchData.image = menuItem.image;
    }

    patchData.id = oldMenuItem.id;

    this.httpClient.patch<Partial<MenuItem>>(`http://localhost:${env.PORT}/api/menu-item/${oldMenuItem.id}`, patchData, { headers: header }).subscribe(updatedMenuItem => {
      console.log('Patch request response:', updatedMenuItem); // i want to 
    });
  }
}
