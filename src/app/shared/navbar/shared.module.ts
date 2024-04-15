import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';

@NgModule({
  declarations: [
    AddButtonComponent,
    NavbarComponent, 
    NavbarButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    AddButtonComponent,
  ]
})
export class SharedModule { }
