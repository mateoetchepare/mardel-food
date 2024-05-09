import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogInComponent,
  ]
})
export class LogInModule { }
