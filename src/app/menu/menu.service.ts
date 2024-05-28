import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem, foodType } from '../model/menu-item.interface';
import { Observable } from 'rxjs';
import { env } from 'environment';
import { LogInService } from '../log-in/log-in.service';

@Injectable({providedIn: 'root'})
export class MenuService {

  private url: String = '';

  constructor(private httpClient: HttpClient, private LogInService: LogInService) { 
  }
  
  isAdmin(): boolean { 
    return this.LogInService.isAdmin;
  }

  requestItems(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`http://localhost:${env.PORT}/api/menu`);
  }

  requestItemsByFoodType(foodType: foodType): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`http://localhost:${env.PORT}/api/menu/${foodType.toString()}`)
  }
}