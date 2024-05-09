import { Component } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditItemComponent } from '../add-edit-item/add-edit-item.component';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent { 
  public quantity: number = 0;

  @Input({required: true}) 
  public menuItem: MenuItem = {} as MenuItem;

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    let dialogRef = this.dialog.open(AddEditItemComponent, {
      height: '55%',
      width: '55%',
      data: this.menuItem,
    });
  }

  openDeleteDialog() {
    let dialogRef = this.dialog.open(DeleteItemComponent, { // default size is ok
      data: this.menuItem,
    })
  }

  public addUnit() {
    this.quantity++;
    console.log(this.quantity);
  }

  public removeUnit() {
    if (this.quantity > 0) this.quantity--;
  }
}
