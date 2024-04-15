import { Component, OnInit } from '@angular/core';

import { MenuItem, foodType } from '../model/menu-item.interface';
import { MenuService } from './menu.service';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  protected menuItems: MenuItem[] = [];
  protected foodTypes: foodType[] = Object.values(foodType);

  constructor(private service: MenuService) {
    service.requestItems().subscribe(
      items => {
        this.menuItems = items
      }
    );
  }

  selectItemsByFoodType(foodType: foodType) {
    this.service.requestItemsByFoodType(foodType).subscribe(
      items => {
        console.log(items);
        this.menuItems = items;
      }
    );
  }

  ngOnInit(): void {

  }
 }
