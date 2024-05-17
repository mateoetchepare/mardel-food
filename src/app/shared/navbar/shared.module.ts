import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'

import { NavbarComponent } from './navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    AddButtonComponent,
    NavbarComponent, 
    NavbarButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [
    NavbarComponent,
    AddButtonComponent,
  ]
})
export class SharedModule { }
