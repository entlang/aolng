import { Routes } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from '../../routing/auth.guard';

export const userAccountRoutes: Routes = [
  {
    path: '',
    component: UserAccountComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
