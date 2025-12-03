import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { avoidWord } from '../../rules/customValidation';

@Component({
  selector: 'reactive-form',
  standalone: false,
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  loginForm: FormGroup;

  // We can use FormBuilder instance via Dependency injection to create a form group
  constructor(private formBuilderInstance: FormBuilder) {
    // Create a form group with form controls: email, password, subscribe
    this.loginForm = this.formBuilderInstance.group({
      email: [
        '',
        [Validators.email, Validators.required, Validators.minLength(5)],
      ],
      password: ['', [Validators.required, Validators.minLength(5), avoidWord]],
      subscribe: false,
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
