import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'

import { NavbarComponent } from './navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { MatListModule } from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';
import { NavbarButtonModule } from './navbar-button/navbar-button.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    AddButtonComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    NavbarButtonModule,
    SidebarModule,
  ],
  exports: [
    NavbarComponent,
    AddButtonComponent,
  ],
})
export class SharedModule { }
