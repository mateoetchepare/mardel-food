import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { NavbarButtonModule } from '../navbar-button/navbar-button.module';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ SidebarComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    NavbarButtonModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
