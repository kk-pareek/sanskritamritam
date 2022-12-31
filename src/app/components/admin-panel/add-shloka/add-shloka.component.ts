import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-shloka',
  templateUrl: './add-shloka.component.html',
  styleUrls: ['./add-shloka.component.css']
})

export class AddShlokaComponent {
  maxDate = new Date();
  tooltipPosition = new FormControl('above');
  isLoading = false;

  loginForm = this.theFormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private theFormBuilder: FormBuilder,
    private theDateAdapter: DateAdapter<Date>,
  ) {
      this.theDateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onLogin() {
    console.log(this.loginForm.value);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
