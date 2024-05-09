import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { MenuItemModule } from './menu-item/menu-item.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service';
import { SharedModule } from '../shared/navbar/shared.module';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { DeleteItemComponent } from './delete-item/delete-item.component';

const routes: Routes = [
  { path: '', component: MenuComponent } 
]

@NgModule({
  declarations: [AddEditItemComponent,
    DeleteItemComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MenuItemModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
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
