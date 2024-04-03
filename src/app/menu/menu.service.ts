import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../model/menu-item.interface';
import { Observable } from 'rxjs';
import { env } from '../home/environment/home.environment';

@Injectable({providedIn: 'root'})
export class MenuService {

  private url: String = '';

  constructor(private httpClient: HttpClient) { 
    
  }

  requestItems(): Observable<MenuItem[]> {
    
    return this.httpClient.get<MenuItem[]>(`localhost:${env.PORT}/menu`);
  }
}