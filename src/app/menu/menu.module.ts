import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MenuItemModule } from './menu-item/menu-item.module';

const routes: Routes = [
  { path: '', component: MenuComponent } 
]

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenuItemModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class MenuModule  { 
  
}
