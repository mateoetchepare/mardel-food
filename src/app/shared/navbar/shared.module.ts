import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    NavbarButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class SharedModule { }
