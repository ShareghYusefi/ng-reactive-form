import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      email: '',
      password: '',
      subscribe: false,
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
