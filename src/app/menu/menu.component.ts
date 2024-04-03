import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menu-item.interface';
import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  private menuItems: MenuItem[] = [];

  constructor(private service: MenuService) {
    service.requestItems().subscribe(
      items => this.menuItems = items
    );
  }

  ngOnInit(): void {

  }
 }