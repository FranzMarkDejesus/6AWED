// Angular core imports
import { bootstrapApplication } from '@angular/platform-browser';

// Router imports
import { Routes, provideRouter } from '@angular/router';

// Your components
import { AppComponent } from './app/app.component';
import { TemplateDemo } from './app/template-demo/template-demo';
import { ReactiveDemoComponent } from './app/reactive-demo/reactive-demo';
import { CustomDemo } from './app/custom-demo/custom-demo';
import { Register } from './app/register/register';   // ✅ import Register component
import { AddUser } from './app/add-user/add-user';    // ✅ import AddUser component

// Define routes
const routes: Routes = [
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemoComponent },
  { path: 'custom', component: CustomDemo },
  { path: 'register', component: Register },         // ✅ new route for Register
  { path: 'user', component: AddUser },               // ✅ new route for AddUser (replace UserComponent)
  { path: '', redirectTo: 'template', pathMatch: 'full' }
];

// Bootstrap the app with routing
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
.catch(err => console.error(err));
