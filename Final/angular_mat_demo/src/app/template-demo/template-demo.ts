import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css']
})
export class TemplateDemo {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  // Add these for the new fields
  gender: string = '';
  status: string = '';
  comments: string = '';

  onSubmit() {
    // You can log or process all form data here
    console.log({
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    });
  }
}
