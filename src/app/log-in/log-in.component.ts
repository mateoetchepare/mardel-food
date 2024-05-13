import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogInService } from './log-in.service';

@Component({
  selector: 'log-in',
  templateUrl: `log-in.component.html`,
})
export class LogInComponent implements OnInit {
  public logIn: boolean = true;
  public logInForm: FormGroup = {} as FormGroup;

  constructor(public fb: FormBuilder, private service: LogInService) {
    
  }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', [Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/), Validators.required]],
      password: ['', Validators.required],
    })
    
  }

  toggleLogIn() {
    this.logIn = !this.logIn;
  }

  onSubmit() {
    const logInFormValue = this.logInForm.value;
    this.service.submitCredentials(logInFormValue);
  }

  isFormValid(): boolean {
    return this.logInForm.get('email')!.hasError('required') || this.logInForm.get('email')!.hasError('pattern') ||
    this.logInForm.get('password')!.hasError('required')
  }

}
