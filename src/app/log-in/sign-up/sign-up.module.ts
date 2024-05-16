import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './sign-up.component';
import { SignUpService } from './sign-up.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    SignUpComponent,
  ],
  providers: [
    SignUpService,
  ]
})
export class SignUpModule { }
