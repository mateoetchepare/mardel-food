import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sign-up',
  templateUrl: `sign-up.component.html`,
})
export class SignUpComponent implements OnInit, OnDestroy {

  public signUpForm: FormGroup = {} as FormGroup;
  @Output()
  public toggleLogIn = new EventEmitter<string>();
  public buttonPressed: boolean = false;
  private subscriptions: Subscription = new Subscription();

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

    this.subscriptions.add(
      this.service.buttonPressed$.subscribe(pressed => {
        this.buttonPressed = pressed;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  emitLogIn() {
    this.toggleLogIn.emit('');
  }

  isFormValid(): boolean {
    return !(this.signUpForm.get('email')!.hasError('required') || this.signUpForm.get('email')!.hasError('pattern') ||
      this.signUpForm.get('password')!.hasError('required') || this.signUpForm.get('confirmedPassword')!.hasError('required') ||
      this.signUpForm.get('confirmedPassword')!.hasError('passwordsDontMatch'));
  }

  onSubmit() {
    const formValue = this.signUpForm.value;
    delete formValue.confirmedPassword;
    this.service.signUp(formValue, (succesful) => {
      if (succesful) {
        this.emitLogIn();
      } else {
        //TODO mostrar error
      }
    });
  }
}
