import { Component, OnInit } from '@angular/core';

import { MenuItem, foodType } from '../model/menu-item.interface';
import { MenuService } from './menu.service';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  protected menuItems: MenuItem[] = [];
  protected foodTypes: foodType[] = Object.values(foodType);
  protected showAddEditModal: boolean = false;

  constructor(private service: MenuService, private dialog: MatDialog) {
    service.requestItems().subscribe(
      items => {
        this.menuItems = items
      }
    );
  }

  selectAllItems() {
    this.service.requestItems().subscribe(
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

  openDialog() {
    let dialogRef = this.dialog.open(AddEditItemComponent, {
      height: '55%',
      width: '55%',
    });
  }

  ngOnInit(): void {

  }
 }
