import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
  DecimalPipe
} from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

// --- Custom Pipes defined inline ---

@Pipe({
  name: 'reverseString',
  standalone: true
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'exclamation',
  standalone: true
})
export class ExclamationPipe implements PipeTransform {
  transform(value: string, times: number = 1): string {
    return value + '!'.repeat(times);
  }
}

@Pipe({
  name: 'filterFruits',
  standalone: true
})
export class FilterFruitsPipe implements PipeTransform {
  transform(fruits: string[], searchTerm: string): string[] {
    if (!searchTerm) return fruits;
    return fruits.filter(fruit =>
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

// --- Component ---

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    AsyncPipe,
    CurrencyPipe,
    SlicePipe,
    DecimalPipe,
    ReverseStringPipe,
    ExclamationPipe,
    FilterFruitsPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {

  presentDate = new Date();
  price: number = 20000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  filterTerm: string = 'an';  // Example search term for filter

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  times$ = interval(1000).pipe(
    map(() => new Date())
  );

  ngOnInit(): void {}
}
