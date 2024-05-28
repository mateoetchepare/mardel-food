import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpModule } from './sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';
import { LogInService } from './log-in.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar'

const routes: Routes = [
  { path: '', component: LogInComponent } 
]

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SignUpModule,
  ],
  exports: [
    LogInComponent,
  ],
  providers: [
    LogInService,
  ]
})
export class LogInModule { }
