import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarButtonComponent } from './navbar-button.component';



@NgModule({
  declarations: [NavbarButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarButtonComponent,
  ]
})
export class NavbarButtonModule { }
