import { Component } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent { 
  public quantity: number = 0;

  @Input({required: true}) 
  public menuItem: MenuItem = {} as MenuItem;

  constructor() {
  }

  public addUnit() {
    this.quantity++;
    console.log(this.quantity);
  }

  public removeUnit() {
    if (this.quantity > 0) this.quantity--;
  }
}
