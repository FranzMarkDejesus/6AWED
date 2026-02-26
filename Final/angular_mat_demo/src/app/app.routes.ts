import { Routes } from '@angular/router';
import { CustomDemo } from './custom-demo/custom-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';
import { TemplateDemo } from './template-demo/template-demo'; // if exists

export const routes: Routes = [
  { path: 'custom', component: CustomDemo },
  { path: 'reactive', component: ReactiveDemoComponent },
  { path: 'template', component: TemplateDemo },
  { path: '', redirectTo: '/template', pathMatch: 'full' } // default route
];
