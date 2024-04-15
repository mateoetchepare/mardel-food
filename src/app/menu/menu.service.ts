import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem, foodType } from '../model/menu-item.interface';
import { Observable } from 'rxjs';
import { env } from 'environment';
import { Storage } from '@google-cloud/storage';

@Injectable({providedIn: 'root'})
export class MenuService {

  private url: String = '';
  //private storage?: Storage;

  constructor(private httpClient: HttpClient) { 
    //this.configStorage();
  } 

  requestItems(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`http://localhost:${env.PORT}/api/menu`);
  }

  requestItemsByFoodType(foodType: foodType): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`http://localhost:${env.PORT}/api/menu/${foodType.toString()}`)
  }
/*
  configStorage(): void {
    const storageConfig = {keyFilename: 'mardel-food-fb3afc66f219.json'}
    this.storage = new Storage(storageConfig);
  }
  async downloadImage(id: number)  {
  
  }
  */
}