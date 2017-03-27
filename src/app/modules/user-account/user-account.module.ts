import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { userAccountRoutes } from './user-account.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userAccountRoutes)
  ],
  declarations: [LoginComponent]
})
export class UserAccountModule { }
