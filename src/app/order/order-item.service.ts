import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../model/order-item.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OrderItemService {

  private url: String = '';

  constructor(private httpClient: HttpClient) { 
    
  }

  requestItems(): Observable<OrderItem[]> {

    return this.httpClient.get<OrderItem[]>('url');
  }
  
}