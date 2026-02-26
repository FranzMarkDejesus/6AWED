import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select'; // ✅ Added import
import { MatCardModule } from '@angular/material/card'; // ✅ Added import

@Component({
  selector: 'app-register',
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
    MatSelectModule, // ✅ Added
    MatCardModule, // ✅ Added
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

  userName: string = ''; // ✅ Match HTML
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  country: string = ''; // ✅ Added
  terms: boolean = false;

  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    terms: new FormControl(false, [Validators.requiredTrue]),
    country: new FormControl('', [Validators.required]) // ✅ Added to form group
  });

  onClickSubmit(data: any) {
    this.submitted = true;

    if (this.formdata.valid) {
      this.userName = data.userName;
      this.email = data.email;
      this.password = data.password;
      this.gender = data.gender;
      this.address = data.address;
      this.birthDate = data.birthDate;
      this.angularSkillLevel = data.angularSkillLevel;
      this.country = data.country; // ✅ Added

      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}
