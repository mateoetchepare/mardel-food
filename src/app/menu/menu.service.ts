import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../model/menu-item.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MenuService {

  private url: String = '';
/*
  constructor(private httpClient: HttpClient) { 
    
  }

  requestItems(): Observable<OrderItem[]> {
    
    return this.httpClient.get<OrderItem[]>('url');
  }
  */
}