import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
styleUrls: ['./data-binding.css'],

})
export class DataBinding {
studentName ="Franz Mark De jesus";
score = 95;

  imageURL = 'https://avatars.githubusercontent.com/u/176150357?v=4';
isDisabled = true;

colSpanValue = 3;

isPassing = true;

boxColor = "purple";
boxSize = "150px";
}
