import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'custom-error-state-matcher',
  template: '',
})
export class CustomErrorStateMatcher implements ErrorStateMatcher{ 
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty));
  }
}
