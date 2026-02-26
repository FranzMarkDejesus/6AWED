import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // ✅ Added for theme toggle

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule, // ✅ Added
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './add-user.html',
  styleUrls: ['./add-user.css'],
})
export class AddUser {
  // Theme state
  isDarkMode: boolean = false;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      // Regex: Starts with letter [a-zA-Z], followed by letters or numbers [a-zA-Z0-9]*
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')
    ]),
    gender: new FormControl('', [Validators.required]),
    // Custom validator for 2006 and below
    birthDate: new FormControl(null, [Validators.required, this.yearValidator]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    terms: new FormControl(false, [Validators.requiredTrue]),
    country: new FormControl('', [Validators.required])
  });

  // Custom Validator: Checks if birth year is 2006 or earlier
  yearValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value) {
      const date = new Date(value);
      const year = date.getFullYear();
      return year <= 2006 ? null : { 'tooYoung': true };
    }
    return null;
  }

  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      console.log("Form Submitted Successfully!", data);
    } else {
      console.log('Form is invalid. Please check the errors.');
    }
  }
}
