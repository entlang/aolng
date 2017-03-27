import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { aboutRoutes } from './about.routing';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [AboutUsComponent]
})
export class AboutModule { }
