import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container">
      <h1>Angular Forms Demo</h1>
      <nav class="nav">
        <a routerLink="/template" routerLinkActive="active">Template</a>
        <a routerLink="/reactive" routerLinkActive="active">Reactive</a>
        <a routerLink="/custom" routerLinkActive="active">Custom Demo</a>
        <a routerLink="/register" routerLinkActive="active">Register</a> <!-- ✅ NEW LINK -->
        <a routerLink="/user" routerLinkActive="active">User</a> <!-- NEW 'User' Link -->
      </nav>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
      padding: 20px;
      box-sizing: border-box;
      background-color: #f0f4f8;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
      font-size: 2.2rem;
    }

    .nav {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-bottom: 30px;
    }

    .nav a {
      text-decoration: none;
      padding: 10px 20px;
      background-color: royalblue;
      color: white;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    }

    .nav a:hover {
      background-color: #2f4fcd;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .active {
      background-color: darkorange !important;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
      transform: translateY(-1px) scale(1.03);
    }

    .nav a::after {
      content: '';
      display: block;
      height: 3px;
      width: 0;
      background: white;
      transition: width 0.3s;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 2px;
    }

    .nav a:hover::after {
      width: 100%;
    }

    hr {
      width: 80%;
      margin: 20px auto;
      border: 0;
      height: 1px;
      background-color: #ccc;
    }
  `]
})
export class AppComponent {}
