import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ]
})
export class ReactiveDemoComponent {
  demoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    gender: new FormControl('male', Validators.required),
    status: new FormControl('Permanent', Validators.required),
    comments: new FormControl('')
  });

  onSubmit() {
    if (this.demoForm.valid) {
      console.log('Form Submitted', this.demoForm.value);
      alert('Form submitted successfully!');
    } else {
      this.demoForm.markAllAsTouched();
    }
  }

  get f() {
    return this.demoForm.controls;
  }
}
