import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemComponent } from './menu-item.component';
import { SharedModule } from 'src/app/shared/navbar/shared.module';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MenuItemComponent,
  ]
})
export class MenuItemModule { }
