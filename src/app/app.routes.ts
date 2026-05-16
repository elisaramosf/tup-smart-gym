import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: LoginComponent }, // reemplazá por HomeComponent cuando lo tengas
];
