import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemComponent } from './menu-item.component';
import { SharedModule } from 'src/app/shared/navbar/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AddEditItemService } from '../add-edit-item/add-edit-item.service';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    MenuItemComponent,
  ],
  providers: [
    AddEditItemService,
  ]
})
export class MenuItemModule { }
