import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'

import { NavbarComponent } from './navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { MatListModule } from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddButtonComponent,
    NavbarComponent, 
    NavbarButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [
    NavbarComponent,
    AddButtonComponent,
  ],
  providers: [NavbarButtonComponent] //TODO esto esta feo
})
export class SharedModule { }
