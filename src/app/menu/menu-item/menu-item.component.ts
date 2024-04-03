import { Component } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent { 
  public counter: number = 0;

  public addUnit() {
    this.counter++;
    console.log(this.counter);
  }

  public removeUnit() {
    if (this.counter > 0) this.counter--;
  }
}
