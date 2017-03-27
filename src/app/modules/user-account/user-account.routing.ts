import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const userAccountRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];
