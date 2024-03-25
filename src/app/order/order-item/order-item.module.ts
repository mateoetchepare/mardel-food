import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item.component';



@NgModule({
  declarations: [OrderItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OrderItemComponent,
  ]
})
export class OrderItemModule { }
