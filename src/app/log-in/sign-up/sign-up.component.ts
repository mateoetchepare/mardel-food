import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { User } from 'src/app/model/user.interface';

@Component({
  selector: 'sign-up',
  templateUrl: `sign-up.component.html`,
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup = {} as FormGroup;
  @Output()
  public toggleLogIn = new EventEmitter<string>();

  constructor(public fb: FormBuilder, private service: SignUpService) {
    
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/), Validators.required]],
      password: ['', [Validators.required]],
      confirmedPassword: ['', [Validators.required]],
    });

    this.signUpForm.valueChanges.subscribe(() => {
      const password = this.signUpForm.get('password')?.value;
      const confirmedPassword = this.signUpForm.get('confirmedPassword')?.value;
      if (password !== confirmedPassword) {
        this.signUpForm.get('confirmedPassword')?.setErrors({ passwordsDontMatch: true });
      } else {
      }
    });
  }

  emitLogIn() {
    this.toggleLogIn.emit('');
  }

  isFormInvalid(): boolean {
    return this.signUpForm.get('email')!.hasError('required') || this.signUpForm.get('email')!.hasError('pattern') || 
    this.signUpForm.get('password')!.hasError('required') || this.signUpForm.get('confirmedPassword')!.hasError('required') || 
    this.signUpForm.get('confirmedPassword')!.hasError('passwordsDontMatch');
  }

  onSubmit() {
    const formValue = this.signUpForm.value;
    delete formValue.confirmedPassword;
    this.service.signUp(formValue).subscribe((user) => {
      console.log(user); //TODO
    })
  }


}
