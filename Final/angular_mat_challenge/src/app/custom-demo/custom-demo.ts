import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // IMPORTANT: import ReactiveFormsModule here
  templateUrl: './custom-demo.html',
  styleUrls: ['./custom-demo.css']
})
export class CustomDemo {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]),
    gender: new FormControl('male', Validators.required),
    status: new FormControl('Permanent', Validators.required),
    comments: new FormControl('')
  });

  onSubmit() {
    if (this.form.valid) {
      alert('Form submitted successfully!\n' + JSON.stringify(this.form.value));
    } else {
      this.form.markAllAsTouched();
    }
  }

  get f() {
    return this.form.controls;
  }
}
