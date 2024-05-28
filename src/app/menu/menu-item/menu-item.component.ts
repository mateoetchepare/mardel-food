import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditItemComponent } from '../add-edit-item/add-edit-item.component';
import { DeleteItemComponent } from '../delete-item/delete-item.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent { 

  /*
  protected amountItemsCartSubject = new BehaviorSubject<MenuItem>({});
  protected amountItemsCart$ = this.amountItemsCartSubject.asObservable();
  */
  public quantity: number = 0;

  @Input({required: true}) 
  public menuItem: MenuItem = {} as MenuItem;
  @Input({required: true})
  public isAdmin: boolean = false;

  @Output()
  public changes = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {
  }

  openAddEditDialog() {
    let dialogRef = this.dialog.open(AddEditItemComponent, {
      height: '55%',
      width: '55%',
      data: this.menuItem,
    });
    dialogRef.afterClosed()
    .subscribe(res => {
      if (Object.keys(res.data).length != 0) {
        this.emitChanges('') 
      } // TODO: didn't make error case
    })
  }

  openDeleteDialog() {
    let dialogRef = this.dialog.open(DeleteItemComponent, { // default size is ok
      data: this.menuItem,
    })
    dialogRef.afterClosed().subscribe(res => {
      if (JSON.stringify({ "data": {} }) === JSON.stringify(res)) { // JSON stringify to not compare two objects (JS compares by reference)
        this.emitChanges('');
      } // TODO: didn't make error case
    })
  }

  emitChanges(operation: string) {
    this.changes.emit(`${operation}`);
  }

  public addUnit() {
    this.quantity++;
    console.log(this.quantity);
  }

  public removeUnit() {
    if (this.quantity > 0) this.quantity--;
  }
}
