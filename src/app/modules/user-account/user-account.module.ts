import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { userAccountRoutes } from './user-account.routing';
import { UserAccountComponent } from './user-account.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userAccountRoutes)
  ],
  declarations: [UserAccountComponent, LoginComponent, UserProfileComponent]
})
export class UserAccountModule { }
