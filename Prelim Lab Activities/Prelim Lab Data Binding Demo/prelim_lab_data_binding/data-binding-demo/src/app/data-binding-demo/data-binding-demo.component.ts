import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent {

  // --- Text Interpolation ---
  message: string = 'Hello from Data Binding Demo!';

  // --- Property Binding ---
  imageWidth: number = 250;

  // --- Style Binding ---
  textColor: string = 'blue';

  // --- Class Binding ---
  isHighlighted: boolean = true;

  // --- Two-Way Data Binding ---
  yourName: string = '';

  // --- Event Binding ---
  count: number = 0;
  increase() {
    this.count++;
  }
  decrease() {
  this.count--;
  }
}
