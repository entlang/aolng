import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

export const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      {
        path: 'about',
        component: AboutUsComponent
      }
    ]
  }
];
