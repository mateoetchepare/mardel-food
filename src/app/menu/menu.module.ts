import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MenuItemModule } from './menu-item/menu-item.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service';
import { SharedModule } from '../shared/navbar/shared.module';

const routes: Routes = [
  { path: '', component: MenuComponent } 
]

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MenuItemModule,
    SharedModule,
  ],
  exports: [
    MenuComponent,
  ],
  providers: [
    MenuService,
  ]
})
export class MenuModule  { 
  
}
