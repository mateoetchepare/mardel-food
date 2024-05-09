import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemComponent } from './menu-item.component';
import { SharedModule } from 'src/app/shared/navbar/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AddEditItemService } from '../add-edit-item/add-edit-item.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeleteItemService } from '../delete-item/delete-item.service';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    MenuItemComponent,
  ],
  providers: [
    AddEditItemService,
    DeleteItemService,
  ]
})
export class MenuItemModule { }
