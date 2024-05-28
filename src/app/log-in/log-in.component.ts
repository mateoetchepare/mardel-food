import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogInService } from './log-in.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'log-in',
  templateUrl: `log-in.component.html`,
})
export class LogInComponent implements OnInit, OnDestroy {
  public logIn: boolean = true;
  public logInForm: FormGroup = {} as FormGroup;
  public buttonPressed: boolean = false;
  private subscriptions: Subscription = new Subscription(); // using subject and behaviourSubject to test the differente between
  private snackBarSubscription: Subscription = new Subscription();

  constructor(public fb: FormBuilder, private service: LogInService, private _snackBar: MatSnackBar) {
    
  }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', [Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/), Validators.required]],
      password: ['', Validators.required],
    })
    this.subscriptions.add(
      this.service.buttonPressed$.subscribe(pressed => {
        this.buttonPressed = pressed;
      })
    );
    this.snackBarSubscription = this.service.snackBarEvent$.subscribe(event => {
        this.showSnackBar(event, 'Dismiss'); // i think it looks actually cleaner with a callback like i do with signUp component
    });
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
      this.snackBarSubscription.unsubscribe(); 
  }

  toggleLogIn() {
    this.logIn = !this.logIn;
  }

  onSubmit() {
    const logInFormValue = this.logInForm.value;
    this.service.submitCredentials(logInFormValue)
  }

  isFormValid(): boolean {
    return !(this.logInForm.get('email')!.hasError('required') || this.logInForm.get('email')!.hasError('pattern') ||
    this.logInForm.get('password')!.hasError('required'))
  }

  showSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3500 })
  }

}
